class Event < ApplicationRecord
    has_many :comments

    has_many :likes
    has_many :users, through: :user_events


end
