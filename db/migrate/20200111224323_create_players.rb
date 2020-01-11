class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :full_name
      t.integer :age
      t.boolean :starter
      t.string :position
      t.string :team
      t.date :DOB
      t.text :bio

      t.timestamps
    end
  end
end
