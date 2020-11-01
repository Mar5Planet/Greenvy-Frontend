class EventsController < ApplicationController
    before_action :set_event, only: [:update, :destroy]
    def index
        events = Event.all 
        render json: events
    end

    def create
        @event = Event.new(events_params)
    
        if @event.save
          render json: @event, status: :created, location: @event
        else
          render json: @event.errors, status: :unprocessable_entity
        end
    end

      def update
        if @event.update(events_params)
          render json: @event
        else
          render json: @event.errors, status: :unprocessable_entity
        end
      end
    
      def destroy
        @event.destroy
      end

      private 

      def set_event
        @event = Event.find(params[:id])
      end


      def events_params
        params.require(:event).permit(:title, :description, :greenvy_score, :organizer_id, :location, :image_url)
      end
end