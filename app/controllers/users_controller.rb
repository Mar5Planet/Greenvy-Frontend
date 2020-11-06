class UsersController < ApplicationController
    before_action :set_user, only: [:update, :destroy]
    def index
        users = User.all 
        render json: users
    end

    def create
        @user = User.new(users_params)
    
        if @user.save
          render json: @user, status: :created, location: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
    end

      def update
        if @user.update(users_params)
          render json: @user
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @user.destroy
      end

      private 

      def set_user
        @user = User.find(params[:id])
      end


      def users_params
        params.require(:user).permit(:username, :password, :email, :footprint, :location, :age, :profile_img, :car_type, :diet, :dishes, :flight, :car_val, :waste, :recycle, :laundry)
      end
end
