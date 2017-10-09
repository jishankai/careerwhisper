json.extract! course, :id, :name, :description, :speaker, :speaker_intro, :start_at, :end_at, :created_at, :updated_at
json.url course_url(course, format: :json)
