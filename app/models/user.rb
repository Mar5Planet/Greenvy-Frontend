class User < ApplicationRecord
    has_many :followeds, class_name: "UserJoin", foreign_key: :follower_id, dependent: :destroy
    has_many :followers, class_name: "UserJoin", foreign_key: :followed_id, dependent: :destroy
    has_many :user_joins
    has_many :events, through: :user_events
    has_many :likes
    has_many :comments
end
