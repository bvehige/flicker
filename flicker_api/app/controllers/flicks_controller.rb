class FlicksController < ApplicationController
  before_action :set_flick, only: [:show, :update, :destroy]

  # GET /flicks
  def index
    @flicks = Flick.all

    render json: @flicks
  end

  # GET /flicks/1
  def show
    render json: @flick
  end

  # POST /flicks
  def create
    @flick = Flick.create(flick_params)

    if @flick.save
      render json: @flick, status: :created, location: @flick
    else
      render json: @flick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /flicks/1
  def update
    if @flick.update(flick_params)
      render json: @flick
    else
      render json: @flick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /flicks/1
  def destroy
    @flick.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flick
      @flick = Flick.find(params[:id])
      redirect_to flicks_path if !@flick
    end

    # Only allow a trusted parameter "white list" through.
    def flick_params
      params.require(:flick).permit(:title, :year, :category, :image)
    end
end
