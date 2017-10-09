json.extract! survey, :id, :name, :description, :href, :start_at, :end_at, :created_at, :updated_at
json.url survey_url(survey, format: :json)
