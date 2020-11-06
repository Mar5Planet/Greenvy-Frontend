# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: "mar1",
    password: "123456",
    email: "mar@email.com",
    footprint: 100,
    location: "New York, New York",
    age: 23,
    profile_img: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp" ,
    car_type: "a",
    diet: "b",
    dishes: "a",
    flight: "b",
    car_val: 200,
    waste: "b",
    recycle: "a",
    laundry: "b",
)

User.create(
    username: "mar2",
    password: "123456",
    email: "mar2@email.com",
    footprint: 30,
    location: "Tucson, Arizona",
    age: 23,
    profile_img: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg" ,
    car_type: "b",
    diet: "a",
    dishes: "b",
    flight: "a",
    car_val: 0,
    waste: "c",
    recycle: "b",
    laundry: "c",
)

Event.create(
    title: "event1",
    description: "this is an environmental event",
    greenvy_score: 10,
    organizer_id: 1,
    location: "New York, New York",
    image_url: "https://www.creativenano.gr/wp-content/uploads/2019/01/cnano_natural_environment.jpg"
)

Event.create(
    title: "event2",
    description: "this is an environmental event",
    greenvy_score: 5,
    organizer_id: 2,
    location: "Los Angeles, California",
    image_url: "https://www.brother.is/-/media/images/brother-nordics/blog/header-images/10-ways-to-help-environmental-blog-header-no-text.jpg?mw=1170&hash=3A2D5CFA29A6F352398A1EED0033E45D9DC7AC1D"
)
Event.create(
    title: "event2",
    description: "this is an environmental event",
    greenvy_score: 5,
    organizer_id: 2,
    location: "Los Angeles, California",
    image_url: "https://www.brother.is/-/media/images/brother-nordics/blog/header-images/10-ways-to-help-environmental-blog-header-no-text.jpg?mw=1170&hash=3A2D5CFA29A6F352398A1EED0033E45D9DC7AC1D"
)
Event.create(
    title: "event2",
    description: "this is an environmental event",
    greenvy_score: 5,
    organizer_id: 2,
    location: "Los Angeles, California",
    image_url: "https://www.brother.is/-/media/images/brother-nordics/blog/header-images/10-ways-to-help-environmental-blog-header-no-text.jpg?mw=1170&hash=3A2D5CFA29A6F352398A1EED0033E45D9DC7AC1D"
)
Event.create(
    title: "event2",
    description: "this is an environmental event",
    greenvy_score: 5,
    organizer_id: 2,
    location: "Los Angeles, California",
    image_url: "https://www.brother.is/-/media/images/brother-nordics/blog/header-images/10-ways-to-help-environmental-blog-header-no-text.jpg?mw=1170&hash=3A2D5CFA29A6F352398A1EED0033E45D9DC7AC1D"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "This is a great event!"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Looking forward to this"
)
Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Can't wait to attend!"
)


Like.create(
    user_id: 1,
    event_id: 2
)

Like.create(
    user_id: 2,
    event_id: 1
)

Like.create(
    user_id: 1,
    event_id: 1
)

UserJoin.create(
    follower_id: User.all.first.id,
    followed_id: User.all.second.id
)

UserJoin.create(
    follower_id: User.all.second.id,
    followed_id: User.all.first.id
)

UserEvent.create(
    user_id: 1,
    event_id: 2,
    status: "incomplete"
)

UserEvent.create(
    user_id: 2,
    event_id: 1,
    status: "incomplete"
)