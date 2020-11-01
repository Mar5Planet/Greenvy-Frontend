class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.integer :greenvy_score
      t.integer :organizer_id
      t.string :location
      t.string :image_url
      t.timestamps
    end
  end
end
