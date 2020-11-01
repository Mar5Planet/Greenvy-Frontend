class CommentsController < ApplicationController
    before_action :set_comment, only: [:update, :destroy]
    def index
        comments = Comment.all 
        render json: comments
    end

    def create
        @comment = Comment.new(comments_params)
    
        if @comment.save
          render json: @comment, status: :created, location: @comment
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
    end

      def update
        if @comment.update(comments_params)
          render json: @comment
        else
          render json: @comment.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @comment.destroy
      end

      private 

      def set_comment
        @comment = Comment.find(params[:id])
      end


      def comments_params
        params.require(:comment).permit(:content, :user_id, :event_id)
      end
end
