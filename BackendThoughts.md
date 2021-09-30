need to get stress levels of a week from a userID/ Name. if we call a backend with a call get weeklystresslevelsforuser(userId)
then we can return this mock data. we should return it in this form for easier use. but the database will need to hold something different

a user will be simple. it will be like

    {
        id: uuid,
        firstname: string,
        lastname: string,
        datecreated: dateTime,
        email: string,
        dailyStress: dailyStress[],
        meetingsCreated: meetings[],
        meetingsAttending: meetings[],
        messagesSent: messages[],
        messagesRecieved: messages[]

    }

we need to store stress everyday, an array of objects. every object will have a date and a stress level as well as a its own id and userId

dailyStress:

    {
        id: uuid,
        userId: userId this is our foreign key
        date: datetime,
        stress: number
    }

meetings:

    {
        id: uuid,
        meetingStartTime: datetime,
        meetingEndTime: datetime
        meetingCreator: userId
        comingToMeeting: userId[]
    }

messages:

    {
        id: uuid,
        date: datetime,
        messageSender: userId
        messageRecievers: userId[]
    }

deepwork:
this seems conceptually confusing right now. it might mean how much time a person in a 40 hour work week has to work relative to meetings and messages they need to respond to. so if this is just calculations. if we can calculated all meetings a person is going to be involved in for the week and also an abstraction of how much messaging they are doing and divide that from a 40 hour work week this might give us our deepwork time commitment. so this is not a table per say but a calculation of how many meetings a person has in a week and also messages

gonna need some backend calculations and functions to recieve for the frontend:

getUserWeeklyStress(userId):

- get all stress levels for the week and divide that by 5 (or 7)

getUserMonthlyStress(userId):

- getall stress for an entire month and divide that by 3

getLargestStressDayofWeek(userId):

- this will use the same api call as getUserWeeklyStress(userId) but then do calculations to see what day was the mose stress

getLowestStressDayofWeek(userId):

- this will use the same api call as getUserWeeklyStress(userId) but then do calculations to see what day was the least amount of stress

getUsersMeetingsForWeek(userId):

- need to get a count of how many meetings a user has created and is attending for the week

getUsersMessagesOutOfWorkHours(userId):

- need to look up how many messages were sent between 5pm - 9am inclusively and just get a tally

getUserDeepWorkHours(userId):

- calculate how much time is assigned for meetings through the week and also messages sent(this might be a bit too much) and then divide that from 40

visx calculations gonna need to work on that
