class UserJoinsController < ApplicationController
    before_action :set_userJoin, only: [:update, :destroy]
    def index
        userJoins = UserJoin.all 
        render json: userJoins
    end

    def create
        @userJoin = UserJoin.new(userJoins_params)
    
        if @userJoin.save
          render json: @userJoin, status: :created, location: @userJoin
        else
          render json: @userJoin.errors, status: :unprocessable_entity
        end
    end

      def update
        if @userJoin.update(userJoins_params)
          render json: @userJoin
        else
          render json: @userJoin.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @userJoin.destroy
      end

      private 

      def set_userJoin
        @userJoin = UserJoin.find(params[:id])
      end


      def userJoins_params
        params.require(:userJoin).permit(:follower_id, :followed_id)
      end
end
