class CommentSerializer < ActiveModel::Serializer
  attributes :id, :event_id, :content, :created_at
  has_one :user
  
end
