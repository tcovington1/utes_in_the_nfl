class AddPlayoffWinsToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :playoff_wins, :integer
  end
end
