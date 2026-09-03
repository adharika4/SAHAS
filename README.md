# SAHAS

### Data-informed analysis for preventing human trafficking in India

SAHAS is a research-oriented web application that brings together Indian
crime, trafficking, poverty, literacy, employment, and demographic data in one
place. It provides an accessible dashboard for exploring trends and a
prototype prediction workflow for thinking about where prevention resources
could be focused.

> **Important:** SAHAS is a decision-support prototype, not a law-enforcement
> system or a substitute for human review. The current prediction endpoint
> returns mock values until a trained model and reproducible preprocessing
> pipeline are connected.

## What is included

| Area | Current capability |
| --- | --- |
| Landing page | Project mission, workflow, technology overview, and navigation |
| Dashboard | Interactive Recharts visualizations using the project's sample dashboard data |
| Prediction page | State/year/indicator form, risk result presentation, and recommendations UI |
| Dataset page | Catalog and links for the Indian datasets used by the project |
| Learn page | Educational content about trafficking and prevention |
| Contact page | Contact form with MongoDB persistence through a Next.js API route |
| Flask API | Health, prediction, state list, dashboard, export, and contact endpoints |
| Theme support | Light, dark, and system themes with responsive navigation |

## Current implementation status

### Working

- Next.js App Router frontend with responsive pages and reusable shadcn/Radix UI
  components.
- Dashboard charts render from frontend data and support local filter state.
- Prediction form validates required fields at the UI level and displays a
  result flow.
- The Next.js contact route validates submissions and stores them in MongoDB
  when `MONGODB_URI` is configured.
- The Flask service exposes documented route shapes with CORS enabled.
- CSV datasets are included in the repository for inspection and future
  pipeline development.

### Prototype / not yet production-ready

- `/api/predict` currently generates random predictions, risk levels, and
  confidence values; it does not load a trained model.
- Dashboard API responses are currently hard-coded mock data.
- `backend/data_processor.py` contains the intended preprocessing design but
  dataset loading, merging, cleaning, encoding, scaling, and train/test
  preparation are placeholders.
- `backend/model_trainer.py` contains model interfaces but training,
  evaluation, persistence, prediction, and confidence calculations are
  placeholders.
- The dashboard and prediction page currently use local/mock data rather than
  calling the Flask API.
- Data source attribution, column definitions, and licensing should be
  completed before treating the datasets as a published research product.

## Architecture

```text
Browser
  |
  v
Next.js 15 + React 19 + Tailwind + Recharts
  |                         |
  | contact form            | future prediction/dashboard API calls
  v                         v
MongoDB                 Flask + scikit-learn
                         |
                         v
                    CSV datasets
```

The frontend is the main user-facing application. The Flask backend is a
separate prototype service on port `5000`; it is not automatically started by
Next.js.

## Repository structure

```text
app/                    Next.js routes and pages
  api/contact-submit/   MongoDB-backed contact endpoint
backend/
  app.py                Flask API
  data_processor.py     Planned data preparation pipeline
  model_trainer.py      Planned model training interface
components/             Navbar, theme provider, and UI components
hooks/                  Shared React hooks
lib/                    MongoDB and utility helpers
public/                 Static assets
styles/                 Additional styles
*.csv                   Project datasets
```

## Prerequisites

- Node.js 18.18 or newer
- npm
- Python 3.9 or newer for the Flask service
- MongoDB, only if you want contact submissions persisted

## Run the frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm start
```

## Run the Flask backend

Create and activate a Python environment, then install the backend
dependencies:

```bash
python -m venv .venv

# Windows PowerShell
.venv\Scripts\Activate.ps1

# macOS/Linux
# source .venv/bin/activate

pip install -r backend/requirements.txt
python backend/app.py
```

The API listens on [http://localhost:5000](http://localhost:5000).

Useful endpoints:

```text
GET  /api/health
GET  /api/states
GET  /api/data/dashboard
POST /api/predict
POST /api/data/export
POST /api/contact-submit
```

## Environment variables

Create `.env.local` for Next.js and/or `.env` for Flask. Do not commit either
file.

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

`lib/mongodb.ts` reads `MONGODB_URI` for the Next.js contact route. The Flask
service currently reads `MONGO_URI`; configure that separately when using its
contact endpoint:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

## Data

The repository currently includes CSV files covering:

- Human trafficking cases by state and year
- Crime against women
- Total crimes and category-level crime statistics
- Poverty indicators
- Literacy, population, and employment indicators

Before using the data for research or operational decisions, document the
source URL, collection date, license, units, missing-value policy, and
state/year join strategy for every file.

## Roadmap

### Priority 1 — make the model real and reproducible

1. Define a canonical schema for state, year, target, and predictor columns.
2. Implement deterministic CSV loading, state-name normalization, joins, and
   missing-value handling.
3. Build a reproducible training script with a time-aware or grouped split to
   avoid leakage.
4. Train baseline models and persist the model, scaler, encoders, and feature
   manifest together.
5. Replace random predictions with model inference and calibrated uncertainty.
6. Report MAE/RMSE/R² or classification metrics on a held-out test set; remove
   unsupported accuracy claims from the UI.

### Priority 2 — connect the application end to end

1. Replace frontend sample charts with calls to `/api/data/dashboard`.
2. Connect the prediction form to `/api/predict`.
3. Implement real CSV/JSON export with validated filters.
4. Add loading, empty, timeout, and API-error states.
5. Add a single source of truth for the state list and feature names.

### Priority 3 — production quality and responsible AI

1. Add automated tests for preprocessing, API validation, and key UI flows.
2. Add API request schemas, rate limiting, structured logs, and health checks.
3. Add model cards, dataset documentation, data lineage, and a bias/fairness
   review across states and population groups.
4. Add explainability such as feature contributions with clear caveats.
5. Add authentication and role-based access before exposing sensitive
   operational workflows.
6. Add CI for linting, type-checking, tests, and reproducible builds.

## Responsible-use principles

- Use aggregated, non-identifying data wherever possible.
- Treat predictions as signals for further investigation, never as proof.
- Avoid publishing personal information or victim-level records.
- Make uncertainty, missing data, and dataset bias visible to users.
- Involve domain experts and survivor-centered organizations in evaluation.

## License

No license is currently declared for this repository. Add an explicit license
after confirming ownership and redistribution rights for both the source code
and every dataset.

## Contributors

Built by the SAHAS team as a research and social-impact project.
