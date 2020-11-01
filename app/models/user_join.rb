class UserJoin < ApplicationRecord
    belongs_to :followed, class_name: "User", foreign_key: :followed_id
    belongs_to :folllower, class_name: "User", foreign_key: :follower_id
end
