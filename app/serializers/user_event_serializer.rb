class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :event_id, :status, :event
  has_one :event
  has_one :user
end
