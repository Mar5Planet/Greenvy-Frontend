class LikesController < ApplicationController
    before_action :set_like, only: [:update, :destroy]
    def index
        likes = Like.all 
        render json: likes
    end

    def create
        @like = Like.new(likes_params)
    
        if @like.save
          render json: @like, status: :created, location: @like
        else
          render json: @like.errors, status: :unprocessable_entity
        end
    end

      def update
        if @like.update(likes_params)
          render json: @like
        else
          render json: @like.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @like.destroy
      end

      private 

      def set_like
        @like = Like.find(params[:id])
      end


      def likes_params
        params.require(:like).permit(:user_id, :event_id)
      end
end
