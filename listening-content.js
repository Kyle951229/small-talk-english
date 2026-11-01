// Researched external listening lessons; original questions, no redistributed transcripts or audio.
const QUIZ_SCHEMA_VERSION=4;
const LISTENING_PROGRAM_VERSION=1;
const AUTHENTIC_LISTENINGS=[];
function sourceLesson(level,slug,title,focus,questions,transfer){AUTHENTIC_LISTENINGS.push({id:level.toLowerCase()+'-'+slug,level,slug,title,focus,transfer,provider:'British Council LearnEnglish',url:'https://learnenglish.britishcouncil.org/free-resources/listening/'+level.toLowerCase()+'/'+slug,checkedOn:'2026-11-01',questions:questions.map(([prompt,answer,...distractors])=>({type:'choice',prompt,answer,options:[answer,...distractors]}))});}
sourceLesson('A1','request-your-boss','A request from your boss','聽出任務優先順序與先後條件。',[
['Which action must Mario do first?','Contact the client about a visit.','Finish a project summary.','Invite the entire team.'],
['Where is the client based?','Germany.','Brazil.','France.'],
['What comes before sending meeting invitations?','Reserving a suitable room.','Finishing the presentation.','Booking an overseas flight.'],
['Which task has the most flexible timing?','The written project update.','The urgent client email.','The room reservation.']
],'Explain how you would organize these tasks in your own workplace.');
sourceLesson('A1','voicemail-message','A voicemail message','分辨來電目的、聯絡管道與所需資訊。',[
['What does Marina mainly want?','Information about recently released products.','A refund for damaged toys.','A new office address.'],
['Who provided the contact number?','Alex, a colleague.','The company owner.','A family member.'],
['What should John send by email?','A catalogue with pricing details.','An invitation to dinner.','A job application form.'],
['Why is Marina leaving a recording?','John cannot answer right now.','She has forgotten his name.','She wants to cancel an order.']
],'Leave your own short message requesting useful information.');
sourceLesson('A1','booking-table','Booking a table','追蹤兩次通話中人數、時間與位置的改變。',[
['How many guests are in the revised booking?','Six diners.','Four diners.','Eight diners.'],
['When is the final reservation?','Tomorrow at eight in the evening.','Tonight at seven thirty.','Tomorrow at nine in the evening.'],
['What does the employee initially misunderstand?','A change in group size as a time.','The spelling of the restaurant.','The requested day as a month.'],
['Where will the larger table be?','Closer to the cooking area.','Outside beside the road.','In a private upstairs room.']
],'Change a reservation and explicitly confirm both time and group size.');
sourceLesson('A1','business-cards','Business cards','從自我介紹區分職稱、專業背景與稱呼。',[
['What field did Peter study for his doctorate?','Electronic engineering.','Clinical medicine.','International law.'],
['What is Alessandro leading?','A software development project.','A hospital department.','A language course.'],
['Why does Megumi use a shorter name abroad?','Other people find it easier to pronounce.','Her company requires anonymity.','She has legally changed her identity.'],
['What is true about Andres joining the team?','His placement lasts a limited period.','He is its permanent director.','He is leaving immediately.']
],'Introduce your work while clarifying a title someone could misunderstand.');
sourceLesson('A1','finding-library','Finding the library','把方向、借閱規則與禁止事項分開記錄。',[
['What is directly beside the library?','The registration office.','The train platform.','The student restaurant.'],
['How many books may the student borrow now?','Up to six.','Up to two.','Up to ten.'],
['What is the normal borrowing period?','Fourteen days.','Seven days.','Thirty days.'],
['How can a laptop user avoid disturbing others?','Listen through headphones.','Use the loudest speaker setting.','Move all conversations to video calls.']
],'Explain three rules for a shared place without reading the transcript.');
sourceLesson('A1','meeting-new-team-member','Meeting a new team member','區分工作年資、搬家時間與部門職責。',[
['Which department has Carla just joined?','Marketing.','Accounting.','Product design.'],
['What does Peter mainly create at work?','New products.','Advertising schedules.','Financial reports.'],
['Why might they collaborate?','Their product and promotional work connect.','They share the same manager already.','They teach the same university class.'],
['How long has Peter worked at this company?','Three years.','Five years.','One week.']
],'Introduce yourself and ask two questions that invite more than yes or no.');
sourceLesson('A1','meeting-other-students','Meeting other students','不要把出生地、成長地與現在住處混為一談。',[
['Where does Cara come from?','Glasgow.','Manchester.','Leeds.'],
['Which subject does Robert combine with history?','Mathematics.','French.','German.'],
['Where did Selim spend his childhood?','Near London.','In central Glasgow.','In rural Germany.'],
['Why did Selim choose German?','He found it easier than French.','His parents required it.','It was the only subject offered.']
],'Compare your background and interests with those of a new classmate.');
sourceLesson('A1','meeting-people-dinner','Meeting people at a dinner','聽懂名字修正與之前見面的線索。',[
['How is Alyssa connected to Ben?','She is his sister.','She is his colleague.','She is his teacher.'],
['Where had the guests met previously?','At a wedding in a castle.','During a university examination.','On a train to work.'],
['What conversational mistake does Julian make?','He uses the wrong first name.','He forgets his own address.','He offers the wrong meal.'],
['What does Charles offer after the introductions?','Something to drink.','A ride to the station.','A business contract.']
],'Politely correct someone who has misunderstood your name or background.');
sourceLesson('A1','ordering-cafe','Ordering in a café','追蹤改單、外帶與排隊順序。',[
['Why does the first customer change the juice order?','The desired fresh option is unavailable.','The price has doubled.','The drink contains milk.'],
['Which juice does that customer finally choose?','Apple.','Orange.','Grape.'],
['What does the second customer want with tea?','Lemon cake to take away.','A sandwich to eat inside.','A chocolate drink without cake.'],
['What does the last customer buy?','A cookie without a drink.','A large bottled juice.','Two cups of mint tea.']
],'Order something, respond to an unavailable option, and politely protect your place in line.');
sourceLesson('A1','organising-group-project','Organising a group project','用時間限制推導真正能碰面的時段。',[
['When do the students agree to meet?','Wednesday at four in the afternoon.','Tuesday before ten in the morning.','Friday at five in the evening.'],
['Why do they reject the library?','Their planning requires conversation.','It is closed all week.','It charges an entry fee.'],
['Why must Robert leave before five?','He has a mathematics class.','He is catching a flight.','He works in the cafe.'],
['Where will their planning take place?','The university cafe.','A private laboratory.','The registration office.']
],'Arrange a meeting with two constraints and confirm the final plan.');
sourceLesson('A1','shopping-clothes','Shopping for clothes','聽出顏色、尺寸、價格與付款資訊。',[
['Which colour does the customer request?','Black.','White.','Green.'],
['Which size is needed?','The smallest size mentioned.','A medium size.','An extra large size.'],
['What is the stated price?','Twenty-nine pounds.','Nineteen pounds.','Thirty-nine pounds.'],
['Which payment method is accepted?','A credit card.','Only physical coins.','Only a bank transfer.']
],'Ask for a different size and check how to pay.');
sourceLesson('A1','first-english-class','The first English class','分清上課時間與老師另外的諮詢時間。',[
['On which days does the class meet?','Monday and Wednesday.','Tuesday and Thursday.','Wednesday and Friday.'],
['How long is each session?','An hour and a half.','Half an hour.','Two full hours.'],
['Which room is used for lessons?','Room thirteen.','Office seven B.','Room thirty.'],
['Which book should students obtain?','The first-level student edition.','The matching teacher edition.','Any photocopied edition.']
],'Give a new learner clear instructions about a course and how to get help.');
sourceLesson('A2','morning-briefing','A morning briefing','同時記錄人事、停車與付款制度的變動。',[
['Why will the usual parking area be unavailable?','Improvement work is planned.','It has been sold permanently.','It is reserved for a wedding.'],
['Where should later arrivals park?','At the nearby church.','On the factory roof.','Inside the staff canteen.'],
['When must staff remove cars from that alternative?','Before six in the evening.','Before lunchtime.','After midnight only.'],
['How has canteen payment changed?','Cash is no longer accepted.','Only cash is now accepted.','Every meal is now free.']
],'Brief a colleague who missed the announcement, separating each change.');
sourceLesson('A2','invitation-party','An invitation to a party','把邀請資訊與交通指示分兩輪記憶。',[
['Whose home will host the celebration?','The callers cousin.','The listeners boss.','A university teacher.'],
['When will the event happen?','Friday.','Monday.','Sunday.'],
['Which motorway exit is mentioned?','Thirteen A.','Thirty A.','Eight B.'],
['What should a bus passenger do on arrival?','Phone to arrange a lift.','Walk back to the motorway.','Wait for a train to the city.']
],'Invite someone and provide separate plans for drivers and public transport users.');
sourceLesson('A2','changing-meeting-time','Changing a meeting time','辨別提前與延後，確認誰負責通知。',[
['What is the new meeting time?','Nine in the morning.','Eleven in the morning.','One in the afternoon.'],
['Why does Lucy need the change?','Another important appointment is at noon.','Her report will not be ready.','She is leaving the company.'],
['Who will confirm the revised arrangement?','Anna will email the participants.','Sven will telephone everyone.','Lucy will cancel all invitations.'],
['What happens to the meeting itself?','It stays scheduled with an earlier start.','It is cancelled completely.','It moves to the following month.']
],'Negotiate a change and finish by restating the agreed time and next action.');
sourceLesson('A2','changing-plans','Changing plans','推論不滿的原因，而不只記住新日期。',[
['Why can Francesco not attend the play this Friday?','He has a concert commitment.','He has already seen the play.','The theatre is closed.'],
['Why is Sachi especially annoyed?','Similar changes have happened before.','She dislikes all live music.','He has never met her family.'],
['What does he suggest before the concert?','Sharing dinner.','Attending a cinema screening.','Visiting the ticket office together.'],
['What does he promise for the following Friday?','They will attend the play.','He will schedule another rehearsal.','They will stop making plans.']
],'Apologize for a change while acknowledging its effect on the other person.');
sourceLesson('A2','facts-figures','Facts and figures','抓數字的單位與用途，不把所有數字混在一起。',[
['Which two oceans does the canal connect?','The Atlantic and the Pacific.','The Arctic and the Indian.','The Pacific and the Southern.'],
['What length is given for the waterway?','Eighty-two kilometres.','Eighteen kilometres.','Eight hundred kilometres.'],
['How long does a crossing normally take in the talk?','Roughly eight to ten hours.','Almost a month.','Less than ten minutes.'],
['Why is the canal valuable to shipping?','It avoids a much longer sea route.','It replaces every ocean voyage.','It is used only by tourist boats.']
],'Explain a useful shortcut using two numbers and their units.');
sourceLesson('A2','four-conversations','Four conversations','用語氣與情境判斷四段談話各在做什麼。',[
['What event is discussed in conversation A?','A job interview.','A medical operation.','A restaurant booking.'],
['What spoils the museum experience in B?','Visitors blocking the view with photography.','An exhibition without paintings.','A rule against entering the building.'],
['What are the people examining in C?','An old photograph.','A train timetable.','A recent job contract.'],
['Why must the man in D find another group?','The current group has reached the allowed size.','He has failed the whole course.','The project has been cancelled.']
],'Identify the social purpose of each exchange, then reenact one with new details.');
sourceLesson('A2','instructions-assignment','Instructions for an assignment','聽出硬性要求與偏好的差別。',[
['What is the essay deadline?','The eighteenth of October.','The nineteenth of October.','The twenty-eighth of October.'],
['What should students do without an email acknowledgement?','Follow up after a day.','Assume the work was received.','Wait until the course ends.'],
['How should the bibliography be organized?','By alphabetical order.','By the order ideas appeared.','From the shortest title to the longest.'],
['Why is electronic submission preferred?','It saves paper and is convenient.','Printed work is never allowed.','It removes the need for references.']
],'Turn spoken requirements into a short checklist with deadlines and confirmation steps.');
sourceLesson('A2','leaving-message','Leaving a message','聽出重複數字並用重述避免傳話錯誤。',[
['Why is Maria unavailable?','She is having lunch.','She is on a month-long holiday.','She has moved to another company.'],
['What information does Peter need?','Updated figures for a named project.','A new restaurant menu.','A list of holiday destinations.'],
['What is initially misunderstood about the telephone number?','The meaning of repeated digits.','The country in which he lives.','Whether it is an email address.'],
['Why does he also provide email details?','He may be in a meeting during the return call.','He refuses to use the telephone.','Maria cannot receive messages.']
],'Take a message and read back important information before ending the call.');
sourceLesson('A2','missing-class','Missing a class','特別留意例外章節與不同作業的截止時間。',[
['Why will Diana be absent?','She has a medical appointment.','She is changing her course.','She has a job interview abroad.'],
['Which chapter is specifically excluded?','Chapter eighteen.','Chapter seventeen.','Chapter twenty.'],
['How will the practice test reach her?','By email on Wednesday.','By post after the examination.','Through a classmate next month.'],
['What document is she asked to bring?','Evidence from the doctor.','A new passport.','A library application.']
],'Explain an absence and confirm the work you still need to complete.');
sourceLesson('A2','transport-announcements','Transport announcements','優先抓變動後資訊，而非第一次報出的資訊。',[
['Which platform is eventually used for Bristol?','Platform nine.','Platform two.','Platform thirteen.'],
['What delay is announced?','About eight minutes.','About eighty minutes.','Almost an entire day.'],
['What should Paris passengers have ready?','Travel identity documents and boarding passes.','Only their hotel receipts.','A library card and a cash deposit.'],
['What should people in the front underground carriage do?','Use doors farther back.','Exit through the drivers cabin.','Remain on board until midnight.']
],'Relay a changed departure plan and make the required passenger action clear.');
sourceLesson('A2','understanding-explanation','Understanding an explanation','不懂時繼續追問，最後能自己套用規則。',[
['What does the name Fibonacci refer to?','A mathematician.','A type of tree.','A modern university building.'],
['How is a new number in the sequence formed?','Add the two immediately preceding numbers.','Double every previous number.','Subtract one from the previous number.'],
['What comes after eight in the sequence described?','Thirteen.','Ten.','Sixteen.'],
['What happens when more examples are requested?','The professor offers them for the next class.','The student is asked to stop attending.','The lesson changes to a language examination.']
],'Ask for clarification, then explain the rule with your own example.');
sourceLesson('A2','whos-who-office',"Who's who in the office",'用人物特徵與職責一起確認，不靠衣服顏色猜答案。',[
['Who handles incoming orders?','Luciana.','Ian.','Sebastian.'],
['Which responsibility belongs to Maria?','Internal technology systems.','Marketing leadership.','Visitor catering.'],
['Who can help connect a phone to work email?','Sebastian.','Luciana.','Ian.'],
['What is the main purpose of this conversation?','Orienting a new employee.','Interviewing every department manager.','Announcing a company closure.']
],'Introduce three colleagues by responsibility and suggest whom to ask for help.');
sourceLesson('B1','phone-call-customer','A phone call from a customer','聽出請求、原因與例外條件。',[
['Why does Andrea contact Junko?','To negotiate more time to pay.','To report damaged goods.','To cancel every future order.'],
['What payment period is requested?','Sixty days.','Fifteen days.','Ninety days.'],
['Why might the next order improve cash flow?','The new client will pay on delivery.','All goods will be donated.','The supplier will stop charging.'],
['How does Junko describe the arrangement?','An exception for this order.','A permanent change for all customers.','A refusal to discuss payment.']
],'Negotiate an extension politely and confirm its limits in a short email.');
sourceLesson('B1','student-discussion','A student discussion','分辨比較資訊，對有疑問的數據保留查證。',[
['How does the recording compare a Martian day with an Earth day?','It is slightly longer.','It is only half as long.','It lasts an entire Earth year.'],
['What form of water do the students discuss?','Mostly frozen water.','Large warm surface oceans.','Only bottled drinking water.'],
['How is the size of Mars described?','Roughly half the size of Earth.','Larger than Earth.','Exactly the same size.'],
['What helps develop the discussion?','Comparing information and questioning claims.','Refusing to consider any evidence.','Changing every answer to a guess.']
],'Compare two places using three features. Check uncertain facts separately.');
sourceLesson('B1','team-meeting-about-diversity','A team meeting about diversity','整理不同立場、共識與分工。',[
['What does the growing team want to develop?','A shared approach to inclusion and equality.','A policy excluding new employees.','A plan to close every office.'],
['How should staff contribute?','Through workshops and discussion.','Only by reading a final management decision.','By competing for fewer jobs.'],
['Why value different backgrounds?','They can support new ideas.','They guarantee identical opinions.','They eliminate the need to communicate.'],
['What will Stefano investigate?','A suitable trainer.','A new delivery van.','Individual holiday bookings.']
],'Suggest an inclusive team activity and explain how everyone can contribute.');
sourceLesson('B1','weather-forecast','A weather forecast','比較區域與時間，抓轉折後的預測。',[
['How do the forecasts for Manchester and Leeds differ?','Manchester faces heavier storms; Leeds has lighter rain.','Both are promised uninterrupted sunshine.','Only Leeds is expecting snow.'],
['What change is expected at the weekend?','More cloud and rain with lower temperatures.','A sudden nationwide heat increase.','A complete end to all wind.'],
['Which direction does the weekend rain move?','From Scotland towards the south.','From France directly towards Iceland.','From London towards Spain.'],
['How is much of England described for tomorrow?','Bright and increasingly warm.','Below freezing throughout the day.','Covered by continuous heavy snow.']
],'Recommend a flexible weekend plan using the forecast as evidence.');
sourceLesson('B1','interview-about-listening-skills','An interview about listening skills','練習用局部確認取回對話控制權。',[
['Why can listening feel difficult?','The listener cannot easily control the speaker’s speed.','Grammar rules never help any learner.','Real conversations always prohibit questions.'],
['What advantage does real conversation offer over an exam?','You can ask for clarification.','You can always see every answer.','You never need to understand details.'],
['Why can pretending to understand cause problems?','Important instructions may be misunderstood.','It automatically improves memory.','It guarantees the speaker will slow down.'],
['What strategy does the teacher favour?','Confirm part of the message with a focused question.','Request the whole speech again without specifying a problem.','Stop listening after one unfamiliar word.']
],'Practise three clarification questions for an unfamiliar conversation.');
sourceLesson('B1','introduction-lecture','An introduction to a lecture','聽出概念定義、例子及講座結構。',[
['What experience is central to the lecture?','Being deeply absorbed in an activity.','Being unable to concentrate on anything.','Memorising every detail of a holiday.'],
['What example helped inspire the research?','Artists losing awareness of time while working.','Drivers comparing fuel prices.','Tourists booking flights.'],
['How will the lecture begin?','With background about the researcher.','With an immediate final examination.','With unrelated travel announcements.'],
['What idea about happiness is presented?','How we experience events also matters.','Only external possessions determine it.','One activity guarantees permanent happiness.']
],'Describe an activity that absorbs you and explain why.');
sourceLesson('B1','arriving-late-class','Arriving late to class','從小細節推斷情境出了什麼問題。',[
['Why does the late arrival become confused?','The person has entered the wrong class.','The teacher has cancelled every lesson.','The room has no students.'],
['When will the marked tests be returned?','The following Tuesday.','During the same afternoon.','At the end of the next year.'],
['What subject is actually being taught?','Software engineering.','Early American history.','Restaurant management.'],
['Why is the other student frustrated?','Repeated interruptions disrupt the lesson.','Nobody has asked a question.','The late arrival refuses to share lunch.']
],'Clarify an unfamiliar technical abbreviation without interrupting repeatedly.');
sourceLesson('B1','chemist','At the chemist','練習確認需求與限制；本篇只作語言情境。',[
['What symptoms does the customer describe?','A sore throat and a cough.','A broken arm and a headache.','Only tired feet.'],
['Why does the customer choose lozenges?','They cost less than the syrup.','They are a free prescription.','The shop has no other products.'],
['What is needed for the requested antibiotic in the dialogue?','A doctor’s prescription.','A gym membership.','A train ticket.'],
['What conditional next step is mentioned?','Consulting a doctor if the cough continues.','Ignoring every persistent symptom.','Buying every product in the shop.']
],'Role-play asking about a product, its price and any purchase requirements.');
sourceLesson('B1','chatting-about-series','Chatting about a series','分辨喜歡單集、整季與角色的不同理由。',[
['How does the woman distinguish the finale from the whole season?','She likes the finale more than the season overall.','She dislikes both equally without explanation.','She has not watched any episodes.'],
['Why does she find this season less exciting?','Important outcomes seem easier to predict.','Every character has been replaced.','There are no visual effects.'],
['What do both speakers dislike?','Having seven episodes instead of the usual ten.','Having too many episodes to finish.','Watching the series in English.'],
['Why does the woman enjoy Cersei as a character?','Her complexity makes her interesting to watch.','She wants to copy all her behaviour.','She thinks the character is always kind.']
],'Discuss a film you enjoyed while disagreeing politely about one detail.');
sourceLesson('B1','making-decision','Making a decision','意見不同也能合作，理解決策後的態度。',[
['What approach do most participants prefer?','Start the first phase and adjust later.','Delay all work until every detail is fixed.','Cancel the project immediately.'],
['What concerns David?','Starting without enough planning may waste time.','Nobody wants to work on the project.','The team has already finished everything.'],
['What does David do after the decision?','Cooperates while requesting some schedule flexibility.','Leaves the company immediately.','Claims he always supported the decision.'],
['How is Carolina included?','She is directly invited to share her view.','Her attendance is cancelled.','Everyone assumes she agrees without asking.']
],'Choose a plan with a partner and acknowledge one reasonable objection.');
sourceLesson('B1','meeting-old-friend','Meeting an old friend','用追問把近況延伸成自然聊天。',[
['Why has Selina returned?','Work and living costs in London were disappointing.','She has never lived elsewhere.','Patrick has offered her a school place.'],
['Approximately how long have they been out of touch?','Fifteen years.','Five weeks.','Two months.'],
['How does Patrick describe his settled life?','He is content with his family and local life.','He is desperate to leave immediately.','He has no personal news to share.'],
['What do they agree to do?','Exchange contact details and meet again.','Avoid further conversation.','Travel abroad together that evening.']
],'Give a two-minute life update and ask three specific follow-up questions.');
sourceLesson('B1','work-life-balance','Work–life balance','看出同一種科技的好處與代價。',[
['What has blurred the boundary between work and home?','Portable devices and constant electronic contact.','A complete ban on working at home.','Shorter roads between offices.'],
['What benefit of the change is mentioned?','Greater flexibility about working time and place.','No employee ever needs to rest.','Every working day has disappeared.'],
['How does the discussion present modern working patterns?','As involving both opportunities and drawbacks.','As entirely harmful without any benefit.','As identical to older routines.'],
['What characterised the traditional pattern described?','Clearer separation between working hours and free time.','Permanent availability every night.','No weekends or holidays at all.']
],'Explain your preferred work boundaries and one compromise you would accept.');
sourceLesson('B2','business-interview','A business interview','整合使用者痛點、商業模式及下一步。',[
['What two difficulties do parents face?','Limited time and gaps in subject knowledge.','Too many local free tutors and spare hours.','A lack of phones and school buildings.'],
['Why can online tutoring be cheaper in this example?','Tutors avoid travelling to students’ homes.','The app has no tutors.','All subjects are taught by parents.'],
['What inspired the founder?','Her own difficulty supporting her son.','An unrelated sports competition.','A requirement to close local schools.'],
['What will new funding support?','A wider range of services.','Removing every mobile version.','Ending access outside one town.']
],'Pitch a useful service: problem, customer, solution and one limitation.');
sourceLesson('B2','design-presentation','A design presentation','連結目標客群、設計理由與上市時程。',[
['Who is the intended market?','Adult men interested in outdoor life and technology.','Young children shopping for toys.','Professional chefs buying kitchen equipment.'],
['What do the digital details on the bottle actually do?','Create a visual association with gadgets.','Display a working weather forecast.','Connect the shampoo to a phone.'],
['What changed about the size-release plan?','Both sizes are now ready together.','The travel size has been cancelled.','Only a larger industrial size will launch.'],
['What is the planned sequence?','Marketing next month, launch one month later.','Launch first, then design the bottle.','Marketing and launch were both last year.']
],'Explain three design choices for a website and connect each to its audience.');
sourceLesson('B2','digital-detox-podcast','A digital detox podcast','分辨漸進策略與一次做到極端的差異。',[
['Why is Amanda online so much?','Her professional and personal networks overlap.','She has no offline work responsibilities.','She only uses the internet on holiday.'],
['What was her first practical change?','Reducing nonessential notifications.','Throwing away every device immediately.','Accepting more automatic alerts.'],
['What did she notice about checking her phone?','It often helped her avoid the present situation.','It only happened when she was alone.','It never interrupted family time.'],
['What does she suggest if a full weekend feels difficult?','Begin with a shorter screen-free period.','Abandon any attempt at change.','Stay online for an extra weekend.']
],'Defend one realistic digital boundary and respond to a friend’s objection.');
sourceLesson('B2','lecture-about-experiment','A lecture about an experiment','用觀察解釋看似矛盾的概念；時間資訊依錄音年代理解。',[
['What surprising property does the experiment illustrate?','A material that seems solid can flow extremely slowly.','Every liquid freezes instantly at room temperature.','Glass always melts faster than water.'],
['Why is observing a drop difficult?','Drops are separated by many years.','The apparatus changes location every hour.','The experiment only runs for seconds.'],
['What prevented one recorded observation?','A temporary webcam power failure.','The funnel had been sold.','All the pitch had evaporated.'],
['What contrast concludes the lecture?','A very slow event can spread quickly online.','Scientific news can never interest the public.','A fast experiment always takes decades to explain.']
],'Explain a counterintuitive process using a clear example and evidence.');
sourceLesson('B2','talk-about-motivation','A talk about motivation','辨認論點、實驗證據與推論邊界。',[
['What unexpected result is reported for the rewarded group?','It took longer to solve the problem.','It completed every task instantly.','It refused to participate.'],
['Where does the speaker say incentives are more useful?','Simple tasks with straightforward output.','Every creative problem without exception.','Tasks that require no action at all.'],
['Why might rewards hinder creative work in the talk?','Attention narrows too much towards the outcome.','People completely forget the reward exists.','Creative tasks become physically impossible.'],
['What alternative does the speaker promote?','More autonomy over how work is done.','More supervision of every minute.','Identical schedules for every worker.']
],'Evaluate the speaker’s claim and offer one example where context might matter.');
sourceLesson('B2','business-news','Business news','辨認比例、趨勢與報導中的預期落差；數據僅屬教材。',[
['Which group still has higher turnout in the report?','Older voters.','The youngest voters.','All age groups have exactly equal turnout.'],
['How did ONK’s results compare with earlier fears?','They were better than expected despite a product recall.','The company reported no sales at all.','The recall had never happened.'],
['What convenience supports cashless payments?','People can use devices they already carry.','Every retailer has stopped using electricity.','Customers must carry more separate objects.'],
['What is the structure of the bulletin?','Several separate news items.','One uninterrupted product advertisement.','Only a personal holiday story.']
],'Summarise three news items, separating reported facts from your opinion.');
sourceLesson('B2','creating-study-group','Creating a study group','追蹤提案、反對與最後折衷。',[
['How many regular participants are planned?','Three, with a fourth person at the first meeting.','Four at every meeting without exception.','Only one student.'],
['Why avoid meeting in the library?','Their conversation may disturb other users.','It has no books.','The group has been permanently banned.'],
['What duration is agreed?','Ninety minutes.','Thirty minutes.','Three hours.'],
['How will Dina contribute?','Bring discussion guidelines and help moderate.','Cancel every meeting.','Replace all studying with a final exam.']
],'Negotiate a recurring study session, including place, duration and rules.');
sourceLesson('B2','film-reviews','Film reviews','分辨諷刺、保留態度與最後評價。',[
['What does the first film do with the reviewer’s low expectations?','Confirms them by being disappointing.','Exceeds them with an excellent story.','Changes the reviewer’s view of the original film.'],
['What criticism is made of the characters?','Their behaviour feels unconvincing.','They are all silent throughout.','They never leave one room.'],
['How does the second film compare with initial concerns?','It wins over the reviewer despite doubts.','It is exactly as bad as feared.','It has not yet been seen.'],
['What matters beyond the second film’s effects?','Emotional connection and effective storytelling.','Only its advertising posters.','The price of the cinema snacks.']
],'Recommend a film while distinguishing your expectations from your final opinion.');
sourceLesson('B2','getting-advice','Getting advice','聽出同理、澄清與感謝；只練語言，不採用教材醫療建議。',[
['What signals that Ben’s difficulty is more than essay pressure?','He describes trouble sleeping and fear of going outside.','He says every assignment is complete.','He only asks for a library opening time.'],
['How does Clara initially respond?','She listens and checks her understanding.','She dismisses his concerns as silly.','She changes the topic to a party.'],
['Why is Clara’s experience relevant to Ben?','She has faced similar difficulties.','She has never felt anxious.','She is reporting an examination score.'],
['How does Ben feel about the conversation?','He appreciates being heard and supported.','He is angry that she listened.','He refuses any further conversation.']
],'Practise an empathetic response and a gentle clarifying question; avoid diagnosing anyone.');
sourceLesson('B2','joining-gym','Joining a gym','確認廣告承諾、附加費與試用條件。',[
['What fee policy does the receptionist describe?','No sign-up or cancellation charges.','A compulsory lifetime joining charge.','A cancellation fee on every visit.'],
['Why is the gym no longer open all night?','Very few people used the late-night hours.','The trainers all left the city.','Members requested an earlier midnight opening.'],
['What distinction matters about personal training?','Initial support is included; continuing may cost extra.','Unlimited individual training is always free.','No personalised help is available.'],
['What does the receptionist offer at the end?','A day pass to try the facilities.','A compulsory annual contract.','A free overseas holiday.']
],'Compare two memberships and ask about costs that the advertisement does not explain.');
sourceLesson('B2','office-party-planning','Office party planning','釐清真正限制，提出符合預算的替代方案。',[
['What is the first problem with the requested piano?','It cannot fit through the entrance.','It is unavailable on the required date.','Its rental price already exceeds the original budget.'],
['Why is using a crane rejected?','The extra cost is far beyond the permitted increase.','There is no balcony at all.','The piano would have to be played outdoors.'],
['How much budget flexibility does Ayako mention?','About ten per cent.','About fifty per cent.','No spending limit of any kind.'],
['What is the next step for the alternative piano?','Send photos and costs for consideration.','Book it without asking.','Cancel the whole party immediately.']
],'Offer a realistic alternative when a client’s preferred solution has practical constraints.');
sourceLesson('B2','talking-about-rumours','Talking about rumours','區分親眼經歷、轉述及尚未確認的事。',[
['What is uncertain at the beginning?','Whether John will return and what will happen to him.','Whether either speaker works anywhere.','Whether the office has ever held meetings.'],
['What is Susanne said to have lost?','Recognition for her contribution to a project.','Her personal travel documents.','A place on a holiday tour.'],
['What has Kiera experienced directly?','An intimidating atmosphere in meetings.','Every event described by every colleague.','The final outcome of an investigation.'],
['What may clarify the allegations?','A full investigation.','Repeating rumours without checking.','Deleting every record immediately.']
],'Retell a workplace concern while clearly marking what is known, reported or uncertain.');
