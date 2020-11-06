class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password
      t.string :email
      t.integer :footprint
      t.string :location
      t.string :age
      t.string :profile_img
      t.string :car_type
      t.string :diet
      t.string :dishes
      t.string :flight
      t.integer :car_val
      t.string :waste
      t.string :recycle
      t.string :laundry
      t.timestamps
    end
  end
end
