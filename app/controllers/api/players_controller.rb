class Api::PlayersController < ApplicationController

  def index
    render json: Player.all
  end

  def create
    @player = Player.save(player_params)
    if player.save
      render json: @player
    else
      render json: { erros: @item.errors }, stats: :unprocessable_entity
    end
  end

  def update
    @player = @player.find(params[:id])
    # if @player.update(player_params)
    #   render json: @player
    # else
    #   render json: { erros: @item.errors }, stats: :unprocessable_entity
    # end
    @player.update(complete: !@player.complete)
    render json: @player
  end
  
  def destroy
    Player.find(params[:id]).destroy
    render json: { message: 'Player deleted'}
  end

  private
    def player_params
     params.require(:player).permit(:full_name, :age, :starter, :position, :team, :DOB, :bio) 
    end

end


# t.string "full_name"
# t.integer "age"
# t.boolean "starter"
# t.string "position"
# t.string "team"
# t.date "DOB"
# t.text "bio"