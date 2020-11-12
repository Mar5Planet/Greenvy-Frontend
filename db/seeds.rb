# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: "Environmar",
    password: "123456",
    email: "mar@email.com",
    footprint: 100,
    location: "New York, New York",
    age: 23,
    profile_img: "https://i.ibb.co/0JKS81F/avatar2.png",
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
    username: "LindseyVega123",
    password: "123456",
    email: "demo@email.com",
    footprint: 98,
    location: "New York, New York",
    age: 29,
    profile_img: "https://i.ibb.co/jWdPwML/avatar1.png" ,
    car_type: "b",
    diet: "a",
    dishes: "b",
    flight: "a",
    car_val: 0,
    waste: "c",
    recycle: "b",
    laundry: "c",
)

User.create(
    username: "StephWilcons5",
    password: "123456",
    email: "demo2@email.com",
    footprint: 143,
    location: "New York, New York",
    age: 30,
    profile_img: "https://i.ibb.co/mt699jy/avatar4.png" ,
    car_type: "c",
    diet: "a",
    dishes: "b",
    flight: "a",
    car_val: 0,
    waste: "c",
    recycle: "b",
    laundry: "c",
)

User.create(
    username: "KlienWadda",
    password: "123456",
    email: "demo3@email.com",
    footprint: 65,
    location: "New York, New York",
    age: 28,
    profile_img: "https://i.ibb.co/0Y0Wx8L/avatar3.png" ,
    car_type: "b",
    diet: "a",
    dishes: "b",
    flight: "a",
    car_val: 0,
    waste: "c",
    recycle: "b",
    laundry: "c",
)

User.create(
    username: "StaceyKiebler",
    password: "123456",
    email: "demo4@email.com",
    footprint: 105,
    location: "New York, New York",
    age: 40,
    profile_img: "https://i.ibb.co/L8pQRvp/avatar5.png" ,
    car_type: "a",
    diet: "a",
    dishes: "b",
    flight: "a",
    car_val: 0,
    waste: "c",
    recycle: "b",
    laundry: "c",
)

User.create(
    username: "JohnNapkins55",
    password: "123456",
    email: "demo5@email.com",
    footprint: 155,
    location: "New York, New York",
    age: 30,
    profile_img: "https://i.ibb.co/0ZTk0FN/avatar6.png" ,
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
    title: "Green Gala",
    description: "We are taking a do-over of CEC’s 50th anniversary and look forward to being together with you in person at the Green Gala on September 24, 2021.",
    greenvy_score: 2,
    organizer_id: 1,
    location: "New York, New York",
    image_url: "https://www.cecsb.org/wp-content/uploads/2020/06/2020-06-gg-std-v2-2-768x419.png"
)

Event.create(
    title: "Greenpeace",
    description: "For over 40 years, Greenpeace has used the principles of nonviolent protest to draw attention to threats to the environment, and propose green solutions to those issues. Greenpeace has a number of volunteer opportunities available, whether you are interested in protecting forests or oceans, fighting global warming, defending democracy, or living sustainably.",
    greenvy_score: 10,
    organizer_id: 4,
    location: "New York, New York",
    image_url: "https://www.brother.is/-/media/images/brother-nordics/blog/header-images/10-ways-to-help-environmental-blog-header-no-text.jpg?mw=1170&hash=3A2D5CFA29A6F352398A1EED0033E45D9DC7AC1D"
)

Event.create(
    title: "Restoration Project",
    description: "Founded in 1995 by Bette Midler, the New York Restoration Project organizes communities to fight pollution, maintain parks, create community gardens and plant trees throughout all five boroughs. The organization is always looking for volunteers, either at one of their events, through the Highbridge Forest Crew, or in Twigs & Swigs, a neighborhood greening event followed by a 21+ happy hour.",
    greenvy_score: 5,
    organizer_id: 4,
    location: "New York, New York",
    image_url: "https://cdn.pixabay.com/photo/2016/08/09/17/34/woman-1581202_960_720.jpg"
)

Event.create(
    title: "Amazon Watch",
    description: "Amazon Watch was founded in 1996 to protect the Amazon rainforest as well as the rights of the people living in the Amazon Basin, based on a fundamental belief in the importance of cultural and biological diversity. Amazon Watch works with a variety of environmental organizations to promote rainforest preservation, human rights and corporate accountability in the Amazon Basin.",
    greenvy_score: 4,
    organizer_id: 3,
    location: "New York, New York",
    image_url: "https://cdn.pixabay.com/photo/2016/04/12/20/49/apocalypse-1325398_960_720.jpg"
)

Event.create(
    title: "Vegan Month",
    description: "A vegetarian or vegan diet has been linked to numerous health benefits, including weight loss, and a lowered risk of chronic diseases such as cancer, type-2 diabetes, and heart disease³. These diets are also supported by organizations with a mission of preventing cruelty to animals, some of whom offer meat-free recipes and cooking tips. Even if you’re not ready to adopt a completely vegetarian or vegan diet, you can try the trend of Meatless Monday – a growing movement where regular people take meat out of their diet for one day per week. A recent study⁴ found that eating vegetarian once per week for a decade can help to save the lives of 20.6 million domestic animals – not to mention the health benefits this habit provides to the people themselves.",
    greenvy_score: 10,
    organizer_id: 1,
    location: "New York, New York",
    image_url: "https://cdn.pixabay.com/photo/2020/05/04/18/55/avocado-5130214_960_720.png"
)

Event.create(
    title: "Ecuador Community Development",
    description: "Our community development interns will work alongside Runa Foundatio staff to participate in the development of Fair Trade certified farmers cooperatives. Over the last few years, Runa Foundation has been working with local farmers; holding training workshops, managing administration and coordinating with Fair Trade USA. This is a unique opportunity to get firsthand experience working with farmers cooperatives on an international level. Interns will gain valuable experience and knowledge of cooperative legalization and the requirements under Fair Trade USA.",
    greenvy_score: 50,
    organizer_id: 5,
    location: "Ecuadorian Amazon",
    image_url: "https://brightest-production.s3.amazonaws.com/media/cache/2a/be/2abe116d9b25fc35bcb9cc621ba9d0a2.jpg"
)

Event.create(
    title: "Digital Climate Strike",
    description: "As more cities, states, and countries ban large events and public gatherings to slow the spread of coronavirus (COVID-19), climate activists are taking their weekly climate strikes digital with the #ClimateStrikeOnline campaign. To show solidarity and join this campaign to keep up momentum and awareness for climate justice, simply take a photo or video of yourself with your favorite climate justice sign or message, and post it online to Instagram, Twitter, TikTok, and anywhere else each Friday. Tag your post with hashtag #ClimateStrikeOnline and/or #DigitalStrike.",
    greenvy_score: 2,
    organizer_id: 6,
    location: "Remote",
    image_url: "https://brightest-production.s3.amazonaws.com/media/cache/19/53/195352e5c3fc2a95cb32f15ec2f674c8.jpg"
)

Event.create(
    title: "Carbon Nueutrality",
    description: "While we don't think this alone will solve the climate crisis (one of the many reasons we provide digital infrastructure and tools to groups like Fridays for Future, XR, and Sunrise Movement), little differences DO add up when we spread the word and work together. To illustrate this, if every Spotify or Netflix customer went carbon-zero, it would carbon offset the environmental footprint of a country the size of Australia or Brazil.",
    greenvy_score: 20,
    organizer_id: 5,
    location: "Remote",
    image_url: "https://brightest-production.s3.amazonaws.com/media/cache/74/21/7421df513f3cd37549a966cff05543bf.jpg"
)

Event.create(
    title: "Sunrise NYC",
    description: "There are hundreds of ways to get involved with Sunrise, including volunteering with our local NYC hub, helping one of our support teams, or getting involved with the No Fossil Fuel Money and Green New Deal campaigns.",
    greenvy_score: 10,
    organizer_id: 2,
    location: "New York, New York",
    image_url: "https://brightest-production.s3.amazonaws.com/media/cache/99/a5/99a50be9d5bb2a844abd4def1df9fa3b.jpg"
)

Event.create(
    title: "Greenmarket Volunteer",
    description: "Greenmarket volunteers help with at-market promotions like cooking demonstrations and community outreach. Attending an orientation is mandatory before volunteering.",
    greenvy_score: 5,
    organizer_id: 2,
    location: "New York, New York",
    image_url: "https://brightest-production.s3.amazonaws.com/media/cache/9d/b8/9db8bb5c33c9c5ab2f62a68ed6717eca.jpg"
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
    content: "Love the concept!"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Can't wait to attend!"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "How can I get involved right now?"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "I think this will be super helpful and delightful."
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Let me know if you need extra volunteers!"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Can't wait to attend!"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: ":) good morning everyone"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "wow"
)

Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "I really like what the organizer has done here."
)
Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "Can i volunteer more than once?"
)
Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "this will help my Greenvy Score for sure"
)
Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "good stuff"
)
Comment.create(
    user_id: User.all.sample.id,
    event_id: Event.all.sample.id,
    content: "This looks good"
)




UserJoin.create(
    follower_id: User.all.first.id,
    followed_id: User.all.second.id
)

UserJoin.create(
    follower_id: User.all.third.id,
    followed_id: User.all.second.id
)
UserJoin.create(
    follower_id: User.all[4].id,
    followed_id: User.all.second.id
)
UserJoin.create(
    follower_id: User.all[5].id,
    followed_id: User.all.third.id
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
