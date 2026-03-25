window.KB_BUILD_VERSION = "__BUILD_VERSION__";

window.KB_LAST_UPDATED = "16 Feb 2026";

window.KB_LATEST_CHANGES = [
  "Updates"
];

window.KB_DATA = {
      updates: [
		{
          date: "21 January 2026",
          title: "Refund Process",
          description: "If we create a refund ticket, we should send it via Slack to the available senior to take action immediately"
        },
        {
          date: "5 October 2025",
          title: "Location Update",
          description: "For: Meat party burgers, Don Pollo, Auntie Anne's<br>شرح اللوكيشن : المطاعم دي كلاود كيتشن و دخلتها ممر علي ناصية الممر في صالون The one يخش الممر دة هيلاقي المطاعم دي<br>و اما يجي يعمل Ready to deliver يعملوا من جوا المطعم هيعمل عادي ميعملوش وهو فالشارع"
        },
        {
          date: "2 October 2025",
          title: "Reporting",
          description: "We will only use cx-liveops channel:<br>- If you want to escalate anything related to rider post on Liveops channel and mention logistics-food-agg <br>- If you want to escalate anything related to vendor post on liveops and mention Partner-ops"
        },
        {
          date: "1 October 2025",
          title: "Cashless - Partners",
          description: "DA shouldn`t pay for these restaurants.<br>( Dark Solution - Ama sushi - moishi - Don pollo - Cafe Greco - Karak Boy - Shawermer - Auntie Annes - Eden Bakery & Coffeehouse - Meat Party Burger - Wok and Walk )"
        },
        {
          date: "22 September 2025",
          title: "Edit Order",
          description: "We can remove anything from the meals or the sandwiches ( Pickels - cheese - .... ), but it`s not allowed for add-ons<br>We will call the restaurant to inform them the update."
        }
      ],
      products: [
        {
         case: "Smashed",
 		 type: "Food Quality",
		urgency: "Damaged",
        description: " العميل اشتكى ان المنتج مكسور أو مفتت أو مقسوم أو متفعص أو مهروس أومفتوح",
  		cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on edit to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  Switcher by selecting the order, Wallet Refund and Choosing Product issue as a refund reason and Product Damaged.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Smashed<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
        {
  case: "Freshness",
  type: "Food Quality",
  urgency: "Freshness",
  description: "- العميل اشتكى ان المنتج قديم.العميل اشتكى ان العيش مفرول.العميل قال ان المنتج بايظ (مازال صالح للأكل) و مذكرش كلمة عفن.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Freshness<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Melted",
  type: "Food Quality",
  urgency: "Ice Cream",
  description: "العميل اشتكى ان المنتج جاي سايح او فك من التجمد",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Melted<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Size",
  type: "Food Quality",
  urgency: "Size",
  description: "العميل اشتكى ان حجم المنتج غير مطابق للصورة أو المعلومات على الأبليكيشن",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. Important note: If a customer complains about the size of a product (it seems smaller than the previous time), we should inform the customer that while the size may vary (the product's appearance), the weight should remain consistent on the app, as each product has a specific weight.<br>6. If this is the customer's first order and they complain about the size, educate them about the dimensions, then fulfill the tree with a Feedback not complaint.<br>7. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Size<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "50% Refund of the item + Delivery Fees"
},
{
  case: "Burned",
  type: "Food Quality",
  urgency: "Burned",
  description: "العميل اشتكى ان المنتج ملسوع، محروق، فيه سواد، هباب",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Burned<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Topping",
  type: "Food Quality",
  urgency: "Topping",
  description: "العميل اشتكى ان الطبقة العلوية مفصولة من المنتج داخل العبوة او لازقة في العلبة",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Topping<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Filling",
  type: "Food Quality",
  urgency: "Filling",
  description: "العميل اشتكى ان العبوة غير مملوءة بالكامل(فى حالة ان العبوة مغلقة).العميل اشتكى ان حشو المنتجات ناقص او قليل.العميل اشتكى ان مكون من مكونات السلطة او الساندوتش كان قليل. (Breadfast Kitchen & Breadfast Coffee) فقط",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Filling<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Relative to the restaurant filling standards<br>100% refund of the item if the customer used the item before, and the customer said that the filling complteley not found"
},
		{
  case: "Rotten",
  type: "Food Quality",
  urgency: "Quality",
  description: "- العميل اشتكى من وجود عفن في المنتج (على حسب كلام العميل).وجود عفن ظاهري علي الطعام",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' products using the admin panel.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Rotten<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Hot / Cold",
  type: "Food Quality",
  urgency: "Temperature",
  description: "العميل اشتكى ان المنتج ساقع او سخن و ده عكس طبيعه المنتج.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3.Check the previous tickets, In case a ticket was handled over another channel.<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Hot / Cold<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Replacement order for item if the customer accepted OR 100% refund of the item + Delivery Fees"
},
		{
  case: "Under/Overcooked",
  type: "Food Quality",
  urgency: "Under/Overcooked",
  description: "العميل اشتكى من الدجاج الموجود في أي ساندوتش أو سلطة انه مش مستوي او مستوي زيادة عن اللزوم وذكر أن الدجاج كان ناشف Dry",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' in the undercooked complaints using the admin panel",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Under/Overcooked<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Bad Smell",
  type: "Food Quality",
  urgency: "Smell",
  description: "- العميل اشتكى من وجود رائحة سيئة في المنتج غير مقبولة مثل تعفن ولكن لم يوجد عفن ظاهري.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (in case there is an appearance issue related). will be an appearance complaint<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' in the undercooked complaints using the admin panel<br>8. In case of the complaints related to A restaurant, create an internal request ticket - Restaurant Investigation call, assign it to the OB team, to notify the restaurant with the case.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Smell, Bad Smell<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Spoiled Taste",
  type: "Food Quality",
  urgency: "Taste",
  description: "العميل اشتكى ان طعم المنتج حمضان، مزز أو بايظ. العميل اشتكي ان العصير اللي موجود في الاوفر جاي العلبة منفوخه و بايظ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (in case there is an appearance issue related). will be an appearance complaint<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' in the undercooked complaints using the admin panel<br>8. Create an itenrnal request ticket > Restaurant Investigation call, assign it to the OB team, to notify the restaurant with the case.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Taste, Spoiled Taste<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
		{
  case: "Ingredients Quality",
  type: "Food Quality",
  urgency: "Quality",
  description: " العميل اشتكى ان جودة مكونات المنتج رديئة. (مثال: الشيكولاته المستخدمه فى المنتج كانها نوع رخيص) - العميل اشتكي ان جودة الاستريبس او الدجاج رديئه ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. This type of case applies only to 'Breadfast Kitchen & Breadfast Coffee'.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Ingredients Quality<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "No refund"
},
		{
  case: "Foreign objects",
  type: "Food Quality",
  urgency: "Foreign objects",
  description: "العميل اشتكى من وجود أجسام غريبة عن مكونات المنتج. (مثل فتلة، ورقة، بلاسيتك مرن أو صلب، معدن، سلكة، خشب، تراب، قشرة، بذرة) او أي نوع ملوث للمنتج (داخل المنتج) ",
  cx: "1. Understand the issue and apologize to the customer with empathy & assure the customer with our hygiene and safety measurments.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.<br>7. This type of case applies only to 'Breadfast Kitchen & Breadfast Coffee'.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Foreign objects<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Full Refund + 300 EGP (fixed value) for inconvenience."
},
			{
  case: "Insects",
  type: "Food Quality",
  urgency: "Insects",
  description: " العميل اشتكى من وجود حشرات أو دود أو سوس في المنتج او على غلاف المنتج. (ايا كان نوع الحشرة) ",
  cx: "1. Understand the issue and apologize to the customer with empathy & assure the customer with our hygiene and safety measurments.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Ask the customer for a suitable time to pick the product with the insect. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>4. Ask for a photo of the item that has an issue. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>5. If the customer asked for a replacement, kindly inform them that we are currently unable to send replacement orders, However, we can only refund the amount of product/order.<br>6.Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>7. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' products using the admin panel.<br>",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Appearance, Insects<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Full Refund + 300 EGP (fixed value) for inconvenience."
},
		{
  case: "Poisoning",
  type: "Food Quality",
  urgency: "Poisoning",
  description: " نستخدمها فى حالة ان العميل تعب و راح المستشفى* العميل أصيب بنزلة معوية، قئ، مرض شديد و اجاب على ال 6 اسئلة ",
  cx: "1. Understand the issue, apologize sincerely with empathy, and ensure the customer’s well-being by asking about their health and condition.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Create a retention ticket and change the group to 'CX Retention Restaurant',  and make the status 'Open'<br>4. Inform the customer that one of our team will contact him/her, as soon as possible within the day.<br>5. The retention agent should apologize once more and kindly request a photo of the item that has an issue and medical report. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br><br>6. Ask the customer the following questions:<br>1- what symptoms appeared.<br>2- Time between symptoms appearing and eating.<br>3- The number of people who ate compared to the people who showed symptoms<br>4- Age of the affected consumer (children - youth - the elderly).<br>5- Any alergin for the consumer to the item consumed.<br>6- Was any food consumed by the customer before it?<br><br>7. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Food Safety, Poisoning<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Full Refund + Medical expenses<br>(Medical proof - Request photo evidence when possible)"
},
		{
  case: "Foodborne Illness",
  type: "Food Quality",
  urgency: "Foodborne Illness",
  description: " نستخدمها فى حالة ان العميل تعب بس مراحش المستشفى* العميل أصيب بنزلة معوية، قئ، مرض شديد و لم يجيب على ال 6 اسئلة ",
  cx: "1. Understand the issue, apologize sincerely with empathy, and ensure the customer’s well-being by asking about their health and condition.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Create a retention ticket and change the group to 'CX Retention Restaurant',  and make the status 'Open'<br>4. Inform the customer that one of our team will contact him/her, as soon as possible within the day.<br>5. The retention agent should apologize once more and kindly request a photo of the item that has an issue and medical report. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br><br>6. Ask the customer the following questions:<br>1- what symptoms appeared.<br>2- Time between symptoms appearing and eating.<br>3- The number of people who ate compared to the people who showed symptoms<br>4- Age of the affected consumer (children - youth - the elderly).<br>5- Any alergin for the consumer to the item consumed.<br>6- Was any food consumed by the customer before it?<br><br>7. Offer the designed compensation and apply it through  'Switcher' by selecting the order, 'Wallet Refund' and Choosing 'Product issue' as a refund reason and 'Product Quality'.<br>8. If we need to conduct an investigation,a pickup order can be created only for Breadfast Kitchen & Breadfast Coffee products using the admin panel.<br>9. Report the ticket on freshdesk and add a note in the ticket with full details.<br>10. In case of the complaints related to A restaurant, create an internal request ticket > Restaurant Investigation call, assign it to the OB team, to notify the restaurant with the case.",
  tree: "Ticket Tree: Restaurant, Complaints, Product, Food Safety, Foodborne Illness<br>Group: CX ( As per your group )<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Full Refund + 200EGP (fixed value).<br>300 EGP in case of repetitive Foodborne illness."
},
      ],
      delivery: [
        {
  case: "Coffee Delivery Spilled",
  type: "Delivery Issue",
  urgency: "Coffee",
  description: "القهوة وصلت للعميل مسكوب",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the previous tickets, In case a ticket was created for the concerned order.<br>4. Check the order details.<br>5. Ask for a photo of the item that has an issue. <br>6. Report the ticket on freshdesk",
  tree: "Complaints → Delivery → Coffee Delivery Spilled<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the item + Delivery Fees"
},
        {
  case: "Wrong Collection",
  type: "Delivery Issue",
  urgency: "Amount",
  description: "- العميل اشتكى ان الدليفري حصل مبلغ خطا. - الدليفري قفل الاوردر بدون تحصيل اى مبلغ (دون موافقة من فريق الOutbound). - الدليفري حصل فلوس من العميل و الاوردر كان مدفوع اونلاين.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check: <br>-Customer's complaints history<br>-Customer's balance.<br>-Order's amount and the collected amount shown on switcher<br>-In case of the paid amount is unrealistic or a suspecious customer, refer back to the senior.<br>4. Report the ticket on freshdesk<br>5. Take the action:<br>- If the DA collects an amount lower than what the customer paid, refund the rest of amount from switcher.<br>- If the DA collects more than the amount paid by the customer, deduct the rest from the customer's wallet (switcher)",
  tree: "Complaints → Delivery → Order Payment → Wrong Collection<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund the customer with the rest of the amount"
},
		{
  case: "No change",
  type: "Delivery Issue",
  urgency: "No change",
  description: "-العميل اشتكى أن المندوب بلغ بأن ليس معه باقي للمبلغ المدفوع",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Report the ticket on freshdesk<br>5. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Order Payment → No Change<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "No Compenstion"
},
		{
  case: "Dress code, Smoking",
  type: "Delivery Issue",
  urgency: "Dress code",
  description: "- النظافة الشخصية للمندوب غير مقبولة. - شكوى من العميل من تصرف منافي للنظافة الشخصية من المندوب.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>3. Report the ticket on freshdesk<br>4. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Personal Appearance → Dress code, Smoking<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "No Compenstion"
},
		{
  case: "Hygiene",
  type: "Delivery Issue",
  urgency: "Hygiene",
  description: "النظافة الشخصية للمندوب غير مقبولة. - شكوى من العميل من تصرف منافي للنظافة الشخصية من المندوب.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Check the customer's balance log, make sure that the change was added to the wallet and inform the cst that it is added to the wallet.<br>5. Report the ticket on freshdesk<br>6. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Personal Appearance → Hygiene<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "No Compenstion"
},
		{
  case: "Late Order",
  type: "Delivery Issue",
  urgency: "Late Order",
  description: " الاوردر متاخر عن ال Timeslot و العميل ماستلمش الاوردر بمجرد تواصل العميل",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets: <br>-The expected delivery time<br>-Search with order number and check if there is a reported lateness in case of a bad climate or generalized system issue.<br>4.Report the ticket on freshdesk<br>5.Take the action:<br>-Check the DA's tracker to determine if they are heading to the restaurant (pickup point) or the customer (delivery point).<br>-Contact the customer to provide the order status.<br>-Snooze the chat and follow up with the customer until the order is delivered.<br>-In case the customer is so frustrated in any of the previous cases, snooze the chat and follow up with the customer.<br>-In case the order still processing and we couldn't reach the DA, we should create a ticket to the live ops team. <br>-In case the order is completed and the customer rates it with an explanation that it was late, we should apologize to the customer and offer the designed compensation.",
  tree: "Complaints → Delivery → Order is Late<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "- Short delay (5-14 mins) = Refund delivery fees 20 EGP<br>- Mid delay (15-24 mins) = 25% of order amount capped 150 EGP<br>- Extreme delay (25-30 mins) = 50% of order amount capped 300 EGP<br>- Severe delay (31-... mins) = 100% of order amount capped 500 EGP<br>Any order exceeding 500 EGP requires senior approval before compensation."
},
		{
  case: "Inappropriate attitude",
  type: "Delivery Issue",
  urgency: "Attitude",
  description: "- تعامل مندوب التوصيل مع العميل غير لائق أو غير محترم. - الدليفري رفض ياخد كوينز من العميل. - العميل اشتكى أن المندوب رن الجرس أو خبط على الباب كتير فى وقت قليل بشكل مزعج.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and ask the customer for more information about the incident<br>4. Report the ticket on freshdesk<br>5. Take the action:<br>-Inform the customer that a formal investigation will take place, to prevent this from happening again.<br>-Send an email with the incident details (in case of severe and urgent cases) , and follow up (if needed).<br>-Compensate the customer with the designed compensation.<br>-Check the customer's balance log, make sure that the change was added to the wallet and inform the cst that it is added to the wallet.",
  tree: "Complaints → Delivery → Personal behavior → Inappropirate attitude<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "50% of the order amount"
},
		{
  case: "Unnecessarily contacting customer",
  type: "Delivery Issue",
  urgency: "Unnecessarily contacting",
  description: " مندوب التوصيل يحاول التواصل مع العميل بدون داعي.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets.<br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Personal behavior → Unnecessarily contacting customer<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "50% of the order amount"
},
		{
  case: "Wrong Order",
  type: "Delivery Issue",
  urgency: "Wrong Order",
  description: "- الريسيت مش بتاع العميل و الدليفري وصل الاوردر لعنوان غلط (وهوا طالب اوردر و مجالوش الاوردر الخاص به) - العميل استلم اوردر زيادة مع الاوردر بتاعه (الاوردر عليه رقم مختلف) ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets<br>4. Ask for a photo of wrong order's number.<br>5. Report the ticket on freshdesk.<br>6. Check the customer's balance log, make sure that the change was added to the wallet and inform the cst that it is added to the wallet.<br>7.Take the action:<br>-In case the DA came back with the right order, we should create a ticket anyways mentioning all of the details.<br>-If a customer complains about receiving the wrong order, we should apologize and compensate the customer with the designed compensation.",
  tree: "Complaints → Delivery → Wrong Order<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "100% refund of the order + Delivery Fees"
},
		{
  case: "Order marked as delivered & cust. didn't receive it",
  type: "Order Issue",
  urgency: "Attitude",
  description: "- الاوردر وصل لعنوان غلط (هنا الى بيشتكى هو العميل الى عامل الاوردر و مجالوش). - الاوردر اتقفل و العميل لسه ماستلمش (المندوب قفل الاوردر قبل ما يوصل للعميل)",
  cx: "1.Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3.Check the order details and tickets.<br>4.Report the ticket on freshdesk.<br>5.Follow up with the DA and contact the customer to provide an update on the order.<br>6.Create a ticket to the live ops team.",
  tree: "Complaints → Delivery → Order details → Order marked as delivered & cust. didn't receive it<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund the delivery fees"
},
		{
  case: "Not following delivery instructions",
  type: "Delivery Issue",
  urgency: "instructions",
  description: "- المندوب لم يتبع تعليمات التوصيل المطلوبة من العميل (التعليمات لازم تكون مكتوبه فى الاوردر)",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Order details → Not following delivery instructions<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "After handling the customer if the customer showed any type of frustration add DF to the wallet via wallet refund ticket "
},
		{
  case: "Theft",
  type: "Delivery Issue",
  urgency: "Theft",
  description: "العميل وضح ان المندوب سرقه ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and ask the customer for more information about the incident.<br>4. Ask for a photo or video from the DA if they send anything to the customer or regarding the incident* Report the ticket on freshdesk<br>5. Create a retention ticket and change the group to 'CX-Retention',  and make the status 'Open'<br>6. Inform the customer that one of our team will contact him/her, as soon as possible within the day.<br><br>7. Take the action:<br>-Inform the customer that a formal investigation will take place, to prevent this from happening again.<br>-Send an email with the incident details (in case of severe and urgent cases) , and follow up (if needed).<br>-Compensate the customer with the designed compensation.",
  tree: "Complaints → Delivery → Order details → Theft<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 100% + urgent escalation + follow up"
},
		{
  case: "Harassment",
  type: "Delivery Issue",
  urgency: "Harassment",
  description: "العميل وضح ان המندوب بعت لها رسايل علي واتساب او تحرش بيها سواء تحرش لفظي او Physical",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and ask the customer for more information about the incident.<br>4. Ask for a photo or video from the DA if they send anything to the customer or regarding the incident. (It's important to educate the customer that we need the photo for the report, and it will help us in the investigation in addition to picking up the product).<br>5. Report the ticket on freshdesk<br>6. Take the action:<br><br>-Inform the customer that a formal investigation will take place, to prevent this from happening again.<br>-Send an email with the incident details (in case of severe and urgent cases) , and follow up (if needed).<br>-Compensate the customer with the designed compensation.",
  tree: "Complaints → Delivery → Order details → Harassment<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 100% + urgent escalation + follow up"
},
		{
  case: "DA didn't call me",
  type: "Delivery Issue",
  urgency: "DA didn't call me",
  description: "العميل وضح ان الديليفري لم يتصل به و عمل ريبورت ان الديليفري كلم العميل و مش بيرد",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Follow up with the DA and call the customer to provide an update on the order.<br>7. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Order details → DA didn't call me<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund delivery fees"
},
		{
  case: "Refused to come to door / asked customer to meet outside",
  type: "Delivery Issue",
  urgency: "Refused",
  description: "العميل وضح ان الديليفري طلب منه انه ينزل يستلم الاوردر من تحت العمارة و رفض يطلعهوله لحد باب الشقه ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Inform the customer that a formal investigation will take place, to prevent this from happening again.",
  tree: "Complaints → Delivery → Refused to come to door / asked customer to meet outside<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund delivery fees"
},
		{
  case: "Moving to wrong direction",
  type: "Delivery Issue",
  urgency: "Wrong direction",
  description: "العميل اشتكي ان المندوب بيتحرك عكس اتجاه عنوانه علي الخريطه ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Check the DA's tracker to determine if they are heading to the restaurant (pickup point) or the customer (delivery point).<br>7. Contact the customer and confirm the ETA time for the order.",
  tree: "Complaints → Delivery → Moving to wrong direction<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund delivery fees"
},
		{
  case: "Delivery is not moving on the app",
  type: "Delivery Issue",
  urgency: "Not moving on",
  description: "الديليفري واقف مكانه مش بيتحرك علي الخريطه  ",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check the order details and tickets <br>4. Ask for details about the incident<br>5. Report the ticket on freshdesk.<br>6. Follow up with the DA and call the customer to provide an update on the order.<br>7. Inform the customer that a formal investigation will take place, to prevent this from happening again.<br>8. Check the DA's tracker to determine if they are heading to the restaurant (pickup point) or the customer (delivery point).<br>9. Contact the customer and confirm the ETA time for the order.",
  tree: "Complaints → Delivery → Delivery is not moving on the app<br>Group: CX ( AS per your group )<Br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund delivery fees"
},
      ],
      packaging: [
        {
  case: "Extra Item",
  type: "Packaging",
  urgency: "Extra Item",
  description: " - العميل اشتكى انه استلم منتج (قطعة) او منتجين (قطعتين) أزيد من اللي طلبها في الاوردر.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask the customer, what’s the extra item/s.<br>4. Ask for a photo of the item/s.<br>5. Thank the customer for letting us know and inform him to keep the product as a gift.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Complaints → Packaging → Items → Extra Item<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Keep as a gift"
},


{
  case: "Missing item",
  type: "Packaging",
  urgency: "Missing item",
  description: "- العميل اشتكى من عدم وصول منتج (قطعة) او منتجين (قطعتين) من اللي طلبها في الاوردر.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Check if there’s a ticket created by the CX Restruant team to the outbound team, reporting an out-of-stock item\s.<br>4. Inform the customer that we will refund the product's amount to his wallet and he/she can reorder it again.<br>5. Creat the ticket.<br>6. Create a wallet refund ticket to refund the customer with missing item.",
  tree: "Complaints → Packaging → Items → Missing item<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 100% of the item amount + the delivery fees"
},

{
  case: "Wrong Item",
  type: "Packaging",
  urgency: "Dirty Packaging",
  description: "- العميل اشتكى من توصيل منتج او منتجين خطأ بدل المطلوب في الاوردر(من نفس قسم المنتج الأساسي وبنفس العدد) او البطيخ وصل غلط.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask the customer, what’s the wrong item and its quantity.<br>4. Ask for a photo of the received item (it’s important to mention that the photo would be helpful for the investigations).<br>5. Inform the customer that we will refund the product's amount to his wallet to be able to reorder it again and to keep the wrong item as a gift.<br>6. Report the ticket on freshdesk and add a note in the ticket with full details.",
  tree: "Complaints → Packaging → Items → Wrong item<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Keep the wrong product as a gift and 100% Refund of the item + Delivery Fees"
},

{
  case: "Dirty Packaging",
  type: "Packaging",
  urgency: "Dirty Packaging",
  description: " العميل اشتكى ان الشنط مش نضيفة. (أي نوع ملوث داخل الشنط و ليس داخل المنتج) - العميل اشتكى ان تغليف المنتج مش نضيف. (من بره)",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask for a photo of the package.<br>4. Report the ticket on freshdesk and add a note in the ticket with full details.<br>5. Assure the customer that this is a mistake, and we will report it.<br>6. Compensate the customer with the designed compensation.",
  tree: "Complaints → Packaging → Appearance → Dirty Packaging<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 25% of the item amount + the delivery fees"
},


{
  case: "Missing cutlery",
  type: "Packaging",
  urgency: "Missing cutlery",
  description: "- العميل اشتكى من عدم وصول السكينة او الشوكة مع المنتج.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Assure the customer that this is a mistake, and we will report it.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Packaging → Items → Missing cutlery<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 25% of the item amount + the delivery fees<br>in case the customer can't use the product, full refund"
},

{
  case: "Side Item Missing",
  type: "Packaging",
  urgency: "Side Item Missing",
  description: "- العميل اشتكى ان السلطة اوال cheesecake وصلت من غيرالصوص. - العميل اشتكى ان السيزرسالاد وصل من غيرالعيش. - العميل اشتكى ان السندوتشات جت من غيرعلبة الصوص.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Inform the customer that we will refund the product's amount to his wallet and he/she can reorder it again.<br>4. Report the ticket on freshdesk and add a note in the ticket with full details.<br>5. Create a wallet refund ticket to refund the customer with missing item.",
  tree: "Complaints → Packaging → Items → Side Item Missing<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund 30% of the item amount + the delivery fees"
},

{
  case: "Missing Add-on",
  type: "Packaging",
  urgency: "Missing Add-on",
  description: "العميل طلب اضافة علي المنتج و وصله المنتج من غير الاضافة مثل ('طلب اضافة صوص جبنه شيدر علي البيتزا و استلم البيتزا من غير صوص الشيدر)",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask for a photo of the item.<br>4. Report the ticket on freshdesk and add a note in the ticket with full details.<br>5. Assure the customer that this is a mistake, and we will report it.<br>6. Compensate the customer with the designed compensation.",
  tree: "Complaints → Packaging → Missing Add-on<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund the Add-on price"
},

{
  case: "Wrong Add-on",
  type: "Packaging",
  urgency: "Wrong Add-on",
  description: "العميل طلب اضافة علي المنتج و وصله المنتج باضافة خاطئه مثل ('طلب اضافة صوص جبنه شيدر علي البيتزا و استلم البيتزا عليها اضافة صوص باربيكيو)",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask for a photo of the item.<br>4. Report the ticket on freshdesk and add a note in the ticket with full details.<br>5. Assure the customer that this is a mistake, and we will report it.<br>6. Compensate the customer with the designed compensation.",
  tree: "Complaints → Packaging → Wrong Add-on<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "Refund the Add-on price"
},
      ],
      coffee: [
        {
  case: "Bitter",
  type: "Coffee",
  urgency: "Bitter",
  description: "العميل اشتكى ان القهوة طعمها مر.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Bitter<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 25%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Watery / Weak",
  type: "Coffee",
  urgency: "Weak",
  description: "العميل اشتكي ان القهوه خفيفة او مميمية",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Watery/ Weak<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 35%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Delivered at wrong temperature",
  type: "Coffee",
  urgency: "Cold-Hot",
  description: "العميل اشتكى ان الاوردرالمفروض يوصل سخن و لكن العميل استلمه دافي او بارد.<br>العميل اشتكى ان الاوردر المفروض يوصل ساقع و لكن الثلج ساح.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Delivered at wrong temperature<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 50%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Burnt",
  type: "Coffee",
  urgency: "Burnt",
  description: "العميل اشتكى ان طعم القهوه محروق.- العميل اشتكى ان القهوه طعمها تراب.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Burnt<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 15%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Spoiled",
  type: "Coffee",
  urgency: "Spoiled",
  description: "- العميل اشتكى ان المشروب طعمه بايظ أو فاسد.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.<br>6. If we need to conduct an investigation,a pickup order can be created only for 'Breadfast Kitchen & Breadfast Coffee' products using the admin panel.",
  tree: "Complaints → Product → Coffee Quality App → Spoiled<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 50%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Milk /Whipped Cream Smells or Tastes bad",
  type: "Coffee",
  urgency: "Milk-Whipped Cream",
  description: "- العميل اشتكى ان الحليب أو الكريمة طعمه بايظ أو فاسد.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Milk /Whipped Cream Smells or Tastes bad<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 50%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},

{
  case: "Flavor Smells or Tastes bad",
  type: "Coffee",
  urgency: "Flavor-Taste",
  description: "- العميل اشتكى ان القهوة طعمها وحش او رائحتها وحشة أو فيها حاجة غلط.",
  cx: "1. Understand the issue and apologize to the customer with empathy.<br>2. Click on 'edit' to check the order details on Yelo.<br>*Check the previous tickets, In case a ticket was handled over another channel.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer requests a refund, it will be processed via 'Switcher'.<br>5. Compensate the customer with the designed compensation.",
  tree: "Complaints → Product → Coffee Quality App → Flavor Smells or Tastes bad<br>Status: Resolved/Closed (USE THIS)",
  treeCx: "If customer used the product offer 25%<br>If customer wants to return it or threw it offer Full Refund of the item + Delivery Fees"
},
      ],
      chat: [
      {
        case: "Pay next time",
        type: "Request",
        urgency: "medium",
        description: "لو العميل طلب انه يدفع ثمن الاوردر في المره القادمه او دفع جزء وهيدفع الجزء الباقي في المره القادمه",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. If the customer wants to pay via credit card, educate them about the top-up option. The amount will be added as a negative balance to their account, which may prevent new orders from being placed until the balance is settled through the top-up feature.<br>5. If the customer agrees, the agent will inform the DA to leave.<br>6. Route the ticket to the Live Ops team including in the ticket's note the collected amount by DA vs actual amount as the live ops settle this later with Finance.<br>7. If the customer refused to pay via top-up or cash, proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Pay next time",
        treeCx: "Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX Outbound Restaurant"
      },
      {
        case: "Manual phone verification",
        type: "Verification",
        urgency: "medium",
        description: "لما بيجيلنا تيكت من السيستم ان العميل عايز Manual verification او لو جت تيكت requet a call بنفس الطلب",
        cx: "1. We don’t verify it from our side.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. Ask the customer for his/her number.<br>4. Create an outbound ticket and add a note with the outbound template.<br>5. Inform the customer that he/she will receive a call from one from our team.<br>'In case the customer was logged in and there a connected switcher account, add the switcher link in the ticket's template'.<br>-The OB should contact the customer to confirm their phone number and email address, then verify the customer's account using the switcher.<br><br>Create 'Ticket' to the 'Outbound' team<br><br>Open 'Switcher'<br>Click on 'Show contact information'<br>Click on 'Generate Code'<br>Check you email to get the pass code<br>Click on 'Verify'",
        tree: "Customer Request → Manual phone verification",
        treeCx: "Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
      {
        case: "Paid bill receipt",
        type: "bill",
        urgency: "medium",
        description: "العميل طلب ريسيت فاتورة الكهرباء او المياة عشان يتاكد انه دفعها خلاص",
        cx: "-Educate the customer on how to download the receipt by following these steps:<br><br>1. Open the 'App'<br>2. Go to 'More'3. Go to 'Activity history'<br>4. Choose 'Completed'<br>5. Click on 'View receipt'<br>6. Click on 'Download'",
        tree: "Customer Request → Paid bill receipt",
        treeCx: "Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Cash Refund",
        type: "Cash Refund",
        urgency: "medium",
        description: "العميل طلب ان الفلوس ترجع كاش",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2.Ask for the reason of the refund & validate the reason.<br>3. Check the previous tickets, In case a ticket was handled over another channel.<br>4. Report the ticket on freshdesk and add a note in the ticket with full details.<br>5. Create a pickup order including the cash amount using admin panel.<br>6. Should be handled by retention team.",
        tree: "Customer Request → Cash Refund",
        treeCx: "Action: Refunded<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Customer requested to be called",
        type: "Call",
        urgency: "medium",
        description: "لو الدليفري وصل للعميل والعميل لقي ان في مشكله فالاوردر وطلب من الدليفري انه عايز حد يتواصل معاه وكانت مشكلته مش موجوده فال Tree، مثال (العميل كان فاكر ان في item هتوصل بشكل معين ووصلت بشكل تاني بس مش complain, it's just a clarification)",
        cx: "1. Try to help the customer first.<br>2. Click on 'edit' to check the order details on Yelo.<br>3. If the customer insisted to be called, create a ticket.<br>4. Inform the customer that he will be contacted, as soon as possible within the day.<br>5. If the customer requests to place a scheduled order, educate the customer to choose 'Schedule' and then select the desired time.<br><br>-Click on 'Create ticket'<br>-Fill the needed properties<br>-Click on 'Create'",
        tree: "Customer Request → Requested to be called",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Wallet Refund",
        type: "Wallet Refund",
        urgency: "medium",
        description: "لو العميل طلب اننا نعمله Refund على محفظة بريدفاست",
        cx: "1. Create a ticket.<br>2. Add a note with (Switcher - Reason - Order Number - Order link - amount to be refunded)<br>-Fill the needed properties<br>-Click on 'Create'<br>3. Inform the customer that the amount will be refunded within 24 hours.",
        tree: "Customer Request → Wallet Refund",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX Seniors Restaurant"
      },
	{
        case: "Refund on Credit Card request",
        type: "Refund on Credit Card request",
        urgency: "medium",
        description: "لو العميل طالب اوردر ودافع كريديت وهنضطر نكنسله لاي سبب والعميل طلب الفلوس ترجلعه علي الكريديت مره تانيه",
        cx: "1. Create a ticket.<br>2. Add a note with (Switcher - Reason - Order Number - Order link - amount to be refunded)<br>-Fill the needed properties<br>-Click on 'Create'<br>3. Inform the customer that the amount will be refunded within 24 hours.",
        tree: "Customer Request → Refund on Credit Card request",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX Seniors Restaurant"
      },
	{
        case: "Proof of refund",
        type: "Proof of refund",
        urgency: "medium",
        description: "العميل طلب اثبات بان المبلغ تم رده من خلالنا",
        cx: "1. Create a ticket.<br>2. Add a note with (Switcher - Reason - Order Number - Order link - amount to be refunded)<br>-Fill the needed properties<br>-Click on 'Create'",
        tree: "Customer Request → Proof of refund",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX Seniors Restaurant"
      },
	{
        case: "Unblock account",
        type: "Unblock account",
        urgency: "medium",
        description: "- العميل بلغ انه معموله Block, و بعد التحقق لقينا ان ال Abuse score بتاعه طبيعى.",
        cx: "-",
        tree: "Customer Request → Unblock account",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX Seniors Restaurant"
      },
	{
        case: "Emergency",
        type: "Cancel the order",
        urgency: "medium",
        description: "العميل طلب الغاء الاوردر لوجود حاله طارئه عنده",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Emergency",
        treeCx: "100% refund of the order + Delivery Fees<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Manual Void",
        type: "Manual Void",
        urgency: "medium",
        description: "العميل طلب اوردر و لكن status بتاعته failed او not received و لكن فلوسه لسه معلقه",
        cx: "Check Payment Panel<br><br>1. Create a ticket.<br>2. Add a note with (Switcher - Reason - Order Number - Order link - amount to be refunded)<br>3. Inform the customer that the amount will be voided on the spot or within 3 hours.<br>4. Attach the transaction screenshot from the payment panel to the ticket's note.",
        tree: "Customer Request → Manual Void",
        treeCx: "Action: No Action<br>Status: Open<br>Group: CX Seniors Restaurant"
      },
	{
        case: "Edit Order",
        type: "Edit Order",
        urgency: "medium",
        description: "العميل محتاج يعدل علي الاوردر فطلب الغاؤه",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Edit Order",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Wrong Order",
        type: "Wrong Order",
        urgency: "medium",
        description: "العميل استلم الاوردر غلط وطلب الغاؤه , المندوب وصل اوردر غلط للعميل ولما وصله الاوردر الصح طلب الغاؤه",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>- Create ( Wrong Order ) complain<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Wrong Order",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Missing items",
        type: "Missing items",
        urgency: "medium",
        description: "العميل طلب الغاء الطلب لاستلام الاوردر ناقص",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>- Create ( Missing Item ) complain<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Missing items",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Wrong Address",
        type: "Wrong Address",
        urgency: "medium",
        description: "العميل طلب الاوردر علي عنوان غلط",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Wrong Address",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Change time slot",
        type: "Change time slot",
        urgency: "medium",
        description: "العميل طلب تغيير timeslot",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Change time slot",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Item out of stock",
        type: "OOS",
        urgency: "medium",
        description: "العميل طلب الغاء الاوردر بسبب oos item",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Item out of stock",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Forget to add the voucher",
        type: "Voucher",
        urgency: "medium",
        description: "العميل طلب يلغي الاوردر لانه نسي يضيف ال voucher",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Forget to add the voucher",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Order by mistake",
        type: "Order by mistake",
        urgency: "medium",
        description: "العميل طلب الاوردر عن طريق الخطأ",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Order by mistake",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      },
	{
        case: "Delay",
        type: "Delay",
        urgency: "medium",
        description: "العميل طلب الغاء الاوردر لانه متأخر ولكنه جوا timeslot , الاوردر هيتأخر من المطعم او المندوب ولما بلغنا العميل طلب الغاء الاوردر",
        cx: "1. Click on 'edit' to check the order details on Yelo.<br>2. Call the customer and ask for the Cancellation reason.<br>3. Report the ticket on freshdesk and add a note in the ticket with full details.<br>- Create ( Order is late ) complain<br>4. Proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
        tree: "Customer Request → Cancel order → Delay",
        treeCx: "100% refund of the order + Delivery Fees.<br>Action: No Action<br>Status: Resolved/Closed (USE THIS)<br>Group: CX - Outbound Restaurant"
      }
    ],
      rider: [
        {
          case: "Unreachable Customer",
          type: 'Unreachable',
          urgency: 'urgent',
          description: "The DA arrived at the customer’s door or compound gate, but the customer did not open the door or answer phone calls.",
          cx: "1. Ask for the order number.<br>2. Check it on Yelo.<br>3. Ask DA if he has reached the apartment or not.<br>4. Check the tickets first. (We can ask the DA to wait on hold until we call the customer and get back to him).<br>5. Report the ticket on freshdesk and add a note in the ticket with full details.<br>6. The cx agent must call the customer 3 trials within 7 minutes.<br>• If the customer answers: validate with them that the DA tried to call to deliver the order but received no response.<br> • If the customer confirms, mark the ticket as valid.<br>• If the customer denies being called, mark the ticket as invalid.<br>• If the customer does not answer after three attempts: cancel the order and send an “unreachable” SMS to the customer, including a refund if payment was made by credit card.",
          tree: "Internal Request- Riders Support- Unreachable Customer",
          treeCx: "• Group: CX Riders Support<br>• CX Action:<br>- Order Canceled (in case DA refused to deliver).<br>- Customer informed (in case DA agreed to deliver).<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Out of Zone Address",
          type: 'Out of zone',
          urgency: 'medium',
          description: "The customer’s delivery address is outside the DA’s serviceable delivery zone, causing delays or potential cancellation.",
          cx: "1. The CX agent will check the order ID and create a ticket.<br>2. They will first attempt to handle the DA and request delivery as an exception.<br>3. The agent will then call the customer ( 2 trials within 2 minutes ) to inform them that their current address is out of zone but will be delivered today as a one-time exception.<br>4. If the DA refuses to deliver, we will cancel the order, choose the reason on Yelo (e.g., Fake Customer) and then inform the customer.",
          tree: "Internal Request- Riders Support- Out of Zone Address",
          treeCx: "• Group: CX Riders Support<br>• CX Action:<br>- Order Canceled (in case DA refused to deliver).<br>- Customer informed (in case DA agreed to deliver).<br>• Status: Resolved/Closed (USE THIS)"
        },
		{
		  case: "Restaurant Delay While Dispatch",
		  type: 'Restaurant Delay While Dispatch',
		  urgency: 'urgent',
		  description: "The DA is waiting at the restaurant for the order, but dispatch is delayed (handover not happening on time).",
		  cx: "•Ask for the order number<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Call the restaurant ( 2 Trials ) to confirm the estimated time for dispatching the order to the DA and check for any issues or high volume causing the delay<br>•Notify the DA of the ETA, and Send Delay SMS to customer to be informed of the delay<br>•If the restaurant delay is due to high order volume, request that the restaurant set themselves as busy to prevent future delays. (We can offer to set the restaurant as busy when we have access) (if the DA called within the preperation time > CX validation: invalid - action: DA handled).",
		  tree: "Internal Request- Riders Support- Restaurant Delay While Dispatch",
		  treeCx: "• Group: CX Riders Support<br>• CX Action: Handled with DA and Restaurant + Customer Informed<br>• Status: Resolved/Closed (USE THIS)"
		},
		{
		  case: "Order Package Messy",
		  type: 'Order Package Messy',
		  urgency: 'medium',
		  description: "The DA refuses to receive the order upon delivery due to messy packaging eg, spilled sauce or items on the bag or the order packaging is not properly sealed or is messy when handed to the DA, potentially causing food spillage.",
		  cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Identify the issue with the packaging.<br>•Call the restaurant (1 Trial) and attempt to resolve the situation to prevent a negative customer experience.<br>•If the restaurant refuses to cooperate, route the case to the Account Managers for escalation.",
		  tree: "Internal Request- Riders Support- Order Package Messy",
		  treeCx: "• Group: CX Riders Support<br>• CX Action:<br>- Restaurant Handled (In case restauarant cooperated) <br>- No Action (in case restaurant refused)<br>• Status: Resolved/Closed (USE THIS)"
		},
        {
          case: "Customer Refuses to Receive",
          type: 'Customer Refuses to Receive',
          urgency: 'urgent',
          description: "The customer refuses to accept the order upon delivery due to dissatisfaction, wrong items, or other reasons.",
          cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•The CX agent will check the order ID and create a ticket. They will call the customer to understand the reason for not receiving the order and attempt to handle the situation. ( 2 trials within 2 minutes )<br>•If the customer insists on cancellation, the agent will proceed with cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.<br>",
          tree: "Internal Request- Riders Support- Customer Refuses to Receive",
          treeCx: "• Group: CX Riders Support<br>• CX Action: DA Handled<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Customer challenges with payment ",
          type: 'Close By 0',
          urgency: 'medium',
          description: "The customer declines to pay for the order in Cash-on-Delivery (COD) cases, leaving the DA unable to complete the handover.",
          cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Call the customer ( 2 trials within 2 minutes ) to understand why the order value hasn't been paid and explain the policy that a negative amount will be added to their account, potentially preventing future orders until the balance is settled using the top-up feature.<br>•If the customer agrees, Inform the DA to leave and apply the negative amount to the customer's account.<br>•Document the collected amount by the DA versus the actual amount for Karam to settle later.<br>•Route the ticket to the Live OPS team after confirming with both the customer and rider. (We post on cx liveops channel on slack for now)<br>•If the customer requests a cancellation instead, proceed with the cancellation, record or select the cancellation reason in Yelo, and inform the DA of the cancellation.",
          tree: "Internal Request- Riders Support- Customer challnages with payment ",
          treeCx: "• Group: CX Riders Support<br>• CX Action:<br>- DA Handled (in case negative balance will be added).<br>- Order canceled (in case order will be canceled)<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Customer Inappropriate Attitude",
          type: 'Customer Inappropriate Attitude',
          urgency: 'urgent',
          description: "The DA reports the customer’s unprofessional, abusive, or disrespectful behavior during delivery.",
          cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Apologize to the DA and attempt to handle the situation by asking the DA to deliver the order.<br>•Call the customer to understand what is the issue ( 2 trials within 2 minutes ) and take the necessary action. (if the DA is not handled we need to report to liveops through slack channel cx-liveops for now)",
          tree: "Internal Request- Riders Support- Customer Inappropriate Attitude",
          treeCx: "• Group: CX Riders Support<br>• CX Action: DA Handled<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Customer Requests to Be Called by CX",
          type: 'Customer Requests to Be Called by CX',
          urgency: 'medium',
          description: "The customer requests direct contact from CX (e.g., clarification about order, or issue order).",
          cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Assign the ticket to the outbound team to call the customer and take the needed action<br>",
          tree: "Internal Request- Riders Support- Customer Requests to Be Called by CX",
          treeCx: "• Group: CX Outbound Restaurant<br>• CX Action: No action<br>• Status: Open"
        },
        {
          case: "Customer Requests Cancellation While En Route",
          type: 'Customer Requests Cancellation While En Route',
          urgency: 'urgent',
          description: "The customer asks to cancel the order after the DA has already picked it up and is on the way.",
          cx: "•Ask for the order number.<br>•Check it on Yelo.<br>•Report the ticket on freshdesk and add a note in the ticket with full details.<br>•Call the customer to understand the reason for the cancellation and try to resolve the situation. ( 2 trials within 2 minutes )<br>•If the customer insists on canceling, proceed with the cancellation,select the cancellation reason in Yelo, and inform the DA to move <br>(If the case is routed from the catting team, should be assigned to the outbound team)",
          tree: "Internal Request- Riders Support- Customer Requests Cancellation While En Route",
          treeCx: "• Group: CX Riders Support<br>• CX Action:<br>- Order Canceled (in case customer insists on canceling).<br>- No action (in case order will be delivered normally)<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Live OPS Assistance -DA Bike Breakdown",
          type: 'Bike Breakdown',
          urgency: 'medium',
          description: "The DA’s motorcycle, bicycle, or car breaks down during delivery, preventing them from completing the order.",
          cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Report the ticket on freshdesk and add a note in the ticket with full details.<br>-Route the case to Live OPS, who will manage the DA or reassign a new DA and for further investigation, then send delay SMS to the customer.. (we report to liveops on the slack channel cx-liveops for now)",
          tree: "Internal Request- Riders Support- Live OPS Assistance",
          treeCx: "• Group: CX Riders Support<br>• CX Action: SMS sent<br>• Status: Resolved/Closed (USE THIS)"
        },
        {
          case: "Live OPS Assistance",
          type: 'DA Request',
          urgency: 'urgent',
          description: "Any request from the DA related to Live OPS",
          cx: "-Check if the issue is related to the DA or to an order.<br>-Ask for the order number.<br>-Inform the DA that their issue will be reported to the Live OPS team.<br>-Route the ticket to Live OPS.<br>*Any issues unrelated to CX (e.g., DA is sick, DA wants to end their shift early, etc.) should also be routed directly to Live OPS. (we report to liveops on the slack channel cx-liveops for now)",
          tree: "Internal Request- Riders Support- Live OPS Assistance",
          treeCx: "• Group: CX Riders Support<br>• CX Action: No Action<br>• Status: Resolved/Closed (USE THIS)"
        }
      ],
      restaurant: [
        { case: "DA is late for pick-up", type: 'DA is late for pick-up', urgency: 'urgent', description: "The Delivery Agent has not arrived at the restaurant within the expected time window, causing a delay in food handover.", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Create a ticket.<br>-Check the DA’s location on the map.<br>-Call the DA to confirm the estimated delivery time to the restaurant.<br>-Notify the restaurant with the ETA.", tree: "Internal Request- Resturant Support- DA is late for pick-up", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "DA refused to receive order", type: 'DA refused to receive order', urgency: 'medium', description: "The DA reaches the restaurant but refuses to accept or pick up the assigned order, resulting in potential order cancellation or reassignment.", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Create a ticket and call the DA to determine the reason for any issues.<br>-If the DA refuses to deliver, route the case to Live OPS, who will manage the DA or reassign a new DA. (through slack channel now cx-liveops)<br>-If the DA agrees to deliver without delay, no further action is needed.<br>-If a new DA is reassigned (which may cause a delay), send SMS to the customer. (we need to get back to the restautrant to update them with the action that will be taken)", tree: "Internal Request- Resturant Support- DA refused to receive order", treeCx: "• Group: CX Restaurant Support<br>• CX Action:Handled with DA and Resturant + Customer Informed<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Electricity Issue", type: 'Electricity Issue', urgency: 'urgent', description: "The restaurant is unable to prepare food due to a power outage, impacting order fulfillment.", cx: "-Create a ticket and mark the restaurant as busy. (for now will send on slack cx-liveops to ask them to set the restaurant as busy as we don't have access yet)<br>-Coordinate with the restaurant to obtain an ETA for when the issue will be resolved.<br>-Request the restaurant to complete ongoing orders and cancel those not yet started on their behalf.<br>-Create a cancellation ticket with a detailed reason and route it to the outbound team. (In case there is only one order, inbound team will create a cancellation ticket that would be assigned to the OB to call the customer / if there are more than one order, will create one ticket to the outbound team to cancel these orders and create a cancelation ticket for each order)<br><br>*CX Oubtound Action*<br>-Read the reason, call the customer, and inform them that the order will be canceled.<br>*If the order was paid by -Visa, inform the customer of our authorization and capture payment policy and offer a 100 LE compensation.", tree: "Internal Request- Resturant Support- Electricity Issue", treeCx: "• Group: CX Restaurant Support<br>• CX Action:Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Internet Issue", type: 'Internet Issue', urgency: 'medium', description: "The restaurant cannot receive or confirm orders due to internet connectivity problems.", cx: "-Create a ticket and mark the restaurant as busy. (for now will send on slack cx-liveops to ask them to set the restaurant as busy as we don't have access yet)<br>-Coordinate with the restaurant to obtain an ETA for when the issue will be resolved. (In case of landline/internet issue and not SIM card issue)<br>-Request the restaurant to complete ongoing orders and cancel those not yet started on their behalf.<br>-Create a cancellation ticket with a detailed reason and route it to the outbound team. (In case there is only one order, inbound team will create a cancellation ticket that would be assigned to the OB to call the customer / if there are more than one order, will create one ticket to the outbound team to cancel these orders and create a cancelation ticket for each order)<br><br>*CX Oubtound Action*<br>-Read the reason, call the customer, and inform them that the order will be canceled.<br>*If the order was paid by -Visa, inform the customer of our authorization and capture payment policy and offer a 100 LE compensation.", tree: "Internal Request- Resturant Support- Internet Issue", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Kitchen Maintenance", type: 'Kitchen Maintenance', urgency: 'urgent', description: "The restaurant is unable to prepare food due to issues with kitchen equipment (e.g., grill, fryer, oven, or other essential tools) requiring maintenance or repair, which temporarily disrupts order fulfillment.", cx: "-Create a ticket and mark the restaurant as busy. (for now will send on slack cx-liveops to ask them to set the restaurant as busy as we don't have access yet)<br>-Coordinate with the restaurant to obtain an ETA for when the issue will be resolved.<br>-Request the restaurant to complete ongoing orders (if possible) and cancel those not yet started on their behalf.<br>-Create a cancellation ticket with a detailed reason and route it to the outbound team. (In case there is only one order, inbound team will create a cancellation ticket that would be assigned to the OB to call the customer / if there are more than one order, will create one ticket to the outbound team to cancel these orders and create a cancelation ticket for each order)<br><br>*CX Oubtound Action*<br>-Read the reason, call the customer, and inform them that the order will be canceled.<br>*If the order was paid by -Visa, inform the customer of our authorization and capture payment policy and offer a 100 LE compensation.", tree: "Internal Request- Resturant Support- Kitchen Maintenance", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "System Crash", type: 'System Crash', urgency: 'medium', description: "The restaurant’s POS or ordering system fails “Tablet or SIM Card”, preventing them from receiving or processing orders.", cx: "-Create a ticket and set the restaurant status to busy, then assign the ticket to the Onboarding Team and mention the account managers in the note for visability. (for now will send on slack cx-liveops to ask them to set the restaurant as busy as we don't have access yet)<br>-Coordinate with the restaurant to get the exact system issue to inform the account manager<br>-Request the restaurant to complete ongoing orders (if possible) and cancel those not yet started on their behalf.<br>-Create a cancellation ticket with a detailed reason and route it to the outbound team.(In case there is only one order, inbound team will create a cancellation ticket that would be assigned to the OB to call the customer / if there are more than one order, will create one ticket to the outbound team to cancel these orders and create a cancelation ticket for each order)<br><br>*CX Oubtound Action*<br>-Read the reason, call the customer, and inform them that the order will be canceled.<br>*If the order was paid by -Visa, inform the customer of our authorization and capture payment policy and offer a 100 LE compensation.", tree: "Internal Request- Resturant Support- System Crash", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Unavailable Menu Item – Stock Issue", type: 'Can be Replaced', urgency: 'urgent', description: "A menu item is listed as available but is actually out of stock at the restaurant, leading to customer dissatisfaction.", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Create a ticket and mark the item as unavailable. (Will ask the restaurant to take the action from their side if possible - if not, will send on slack channel CX-liveops)<br>-We should ask the restaurant if there are another items with the same price to make a replacement. If the restaurant informs us of item/s:<br>*Call the customer to inform him/her the available items (3 times within 10 minutes). If the customer agreed with the replacement option, we will call the restaurant to confirm with them.<br>*If the customer didn`t agree with the replacement, proceed with the needed compensation. (if the customer wants to cancel the order, we need to create a cancellation ticket and get back to the restaurant to inform them)<br><br>if the customer is still unreachable, then cancel the order and send OOS SMS , even if the order contains more than one item", tree: "Internal Request- Resturant Support- Unavailable Menu Item – Stock Issue", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Item Marked Unavailable + Customer Informed<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Duplicate Order", type: 'Duplicate Order', urgency: 'medium', description: "The same order is received multiple times by the restaurant due to a system glitch or error, creating confusion.", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Contact the customer and check if they want both orders or only one.<br>-If the customer wants one of them, cancel the other and close the ticket.<br>-If they want both, contact the restaurant to prepare both items.<br>(if the customer wants to cancel the order, we need to create a cancelation ticket and get back to the restaurant to inform them)", tree: "Internal Request- Resturant Support- Duplicate Order", treeCx: "• Group: CX Restaurant Support<br>• CX Action:<br>- Order canceled (In case one of them is canceled).<br>- Restaurant Handled (in case customer wants both orders).<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "DA rude behavior", type: 'With The Restaurant', urgency: 'urgent', description: "Restaurant staff reports unprofessional, disrespectful, or aggressive behavior by the DA during pickup.", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Create a ticket, apologize to the restaurant, and assure them that the issue with the DA will be escalated.<br>-Route the case to Live OPS, who will manage the DA or reassign a new DA. (through slack channel for now cx-liveops)<br>-If a delay is expected due to reassignment, should sent Delay SMS", tree: "Internal Request- Resturant Support- DA rude behavior", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Handled with DA and Restaurant + Customer Informed<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "DA misuse of food", type: 'DA misuse of food', urgency: 'medium', description: "The restaurant reports or suspects that the Delivery Agent mishandled the food after collection, such as eating part of the order, placing food on the ground, or compromising food safety in any way.", cx: "-Create a ticket, apologize to the restaurant, and reassure them that the issue with the rider will be escalated.<br>-Route the ticket to the liveOps team to take an action with the DA. (through slack channel for now cx-liveops)", tree: "Internal Request- Resturant Support- DA misuse of food", treeCx: "• Group: CX Restaurant Support<br>• CX Action: Resturant Handled<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Pricing Issue or Description or Photo", type: 'Pricing Issue or Description or Photo', urgency: 'urgent', description: "The restaurant reports an error in the displayed menu content, such as incorrect pricing, inaccurate item descriptions, or wrong/missing photos. These issues are related to the Content Team and may affect customer expectations and order accuracy.", cx: "-Create a ticket and reassure the restaurant that the issue will be escalated to the Content Team<br>-Route the ticket to the Content Team for resolution within the agreed SLA.<br>-Mention the Account Managers in the note for visibility (for now will send on slack channel cx-liveops)", tree: "Internal Request- Resturant Support- Pricing Issue or Description or Photo", treeCx: "• Group: CX Restaurant Support<br>• CX Action: No action Needed<br>• Status: Resolved/Closed (USE THIS)" },
        { case: "Rider Picked Up wrong Order", type: 'Rider Picked Up wrong Order', urgency: 'medium', description: "The restaurant reports that the DA picked up wrong order and want them back for exchange before reaching the customer", cx: "-Ask for the order number.<br>-Check it on Yelo.<br>-Create a ticket and call the DA to confrim<br> • If the DA could get back to change the order, then confrim with the restruant and then Send the Delay SMS to the customer.<br> • If not, Create ticket and route it to Live OPS to re assign new DA to get the right order to deliver it for the customer and then Send the Delay SMS to the customer. (will send through slack channel cx-liveops)", tree: "Internal Request- Resturant Support- Rider Picked Up wrong Order", treeCx: "• Group: CX Restaurant Support<br>• CX Action:<br>- Handled with DA and Restaurant + Customer Informed (in case the DA will be back for the exchange).<br>- Same action if the order will be reassigned.<br>• Status: Resolved/Closed (USE THIS)" }
      ],
      outbound: [
        {
          content: `
            <div class="document-view">
              <h2>Responsibilities</h2>
              <p>The Outbound Team will handle the following cases:</p>
              <ol>
                <li>4- and 5-star ratings with comments</li>
                <li>Customer requests for a call (from any team)</li>
                <li>High-value tickets</li>
                <li>Late order tickets</li>
              </ol>
              <h2>1. 4- and 5-Star Ratings with Comments</h2>
              <ul>
                <li>Process will follow the same model as the Supermarket team.</li>
                <li>Agents will review the customer’s comments and take appropriate follow-up actions.</li>
              </ul>
              <h2>2. Customer Requests for a Call</h2>
              <ul>
                <li>Customer call-back requests (from any team) will be handled by the Outbound Team.</li>
                <li>Follow-up process will be the same as the Supermarket model.</li>
              </ul>
              <h3>Handling Notes:</h3>
              <ul>
                <li>A customer complaint ticket must always be submitted.</li>
                <li>If the order is from Breadfast Coffee or Breadfast Kitchen:
                  <ul>
                    <li>Proceed with pickup, if needed.</li>
                    <li>Route the case to Pending QA Update, if needed investigation.</li>
                    <li>Compensate the customer and follow the same sequence as the Supermarket model.</li>
                  </ul>
                </li>
                <li>For all other restaurants:
                  <ul>
                    <li>Submit the complaint.</li>
                    <li>Compensate the customer.</li>
                    <li>Close the ticket.</li>
                  </ul>
                </li>
              </ul>
              <h2>3. High-Value Order Tickets</h2>
              <p>A ticket is triggered when the order value is above 2,500 EGP.</p>
              <h3>Process:</h3>
              <ol>
                <li>Call the customer to confirm: Address, Order amount, Confirmation that the customer still needs the order.</li>
                <li>Once confirmed, call the restaurant to start preparing the order.</li>
                <li>If the customer does not answer after 2 call attempts (2nd trial after 2 minutes) / the valid trial should be ringing "not busy":
                  <ul>
                    <li>Cancel the order in Yelo with the appropriate cancellation reason (fake order).</li>
                    <li>Send this SMS to the customer:
                      <div class="sms-box">“We tried to call you twice to confirm your order. However, since we did not receive a response, your order has been cancelled. Please reach out to Breadfast Support through the app if you have any questions or concerns.”</div>
                    </li>
                  </ul>
                </li>
                <li><strong>Priority:</strong> These tickets are high priority since restaurants will not start preparation until confirmation is received.</li>
              </ol>
              <h2>4. Late Order Tickets</h2>
              <p>A ticket is triggered when an order is delayed by 15 minutes or more after the agreed delivery time. (This is based on the expected time shown on switcher NOT YELO - if it's completed but late for less than 5 minutes, our action will be only calling and handling the customer)</p>
              <h3>Process (if late for more than 15 minutes):</h3>
              <ol>
                <li>Check if the order has been delivered or not.</li>
                <li>Call the rider or restaurant (based on order status) to confirm the expected delivery time.</li>
                <li>Call the customer to apologize for the delay and offer compensation based on the delay duration:</li>
              </ol>
              <table class="comp-policy-table">
                <thead>
                  <tr>
                    <th>Delay Duration</th>
                    <th>Compensation Offered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Short Delay (5–14 mins)</td>
                    <td><span class="badge-percent">Refund delivery fees 20 EGP</span></td>
                  </tr>
                  <tr>
                    <td>Mid Delay (15–24 min)</td>
                    <td><span class="badge-percent">25% of order amount capped 150 EGP</span></td>
                  </tr>
                  <tr>
                    <td>Extreme Delay (25-30 mins)</td>
                    <td><span class="badge-full-refund">50% of order amount capped 300 EGP</span></td>
                  </tr>
				  <tr>
                    <td>Severe Delay (31-... mins)</td>
                    <td><span class="badge-full-refund">100% of order amount capped 500 EGP</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        }
      ],
      nps: [
        {
          content: `
            <div class="document-view">
              <h2>1. Ticket Notification:</h2>
              <ul>
                <li>The Follow-Up Team receives a ticket 1 hour after order completion.</li>
              </ul>
              <h2>2. Please enter the following data in each ticket:</h2>
              <ul>
                <li>Agent adds the customer details and fills in the NPS sheet with the following fields:
                  <ul>
                    <li>Ticket ID</li>
                    <li>Order ID</li>
                    <li>Customer ID</li>
                    <li>Restaurant HRID</li>
                    <li>DA HRID</li>
                    <li>Month</li>
                    <li>Date</li>
                    <li>Agreed to Record</li>
                    <li>NPS Question: “On a scale from 0 to 10, how likely are you to recommend Breadfast restaurant delivery to a friend or colleague?”</li>
                    <li>NPS Score Category</li>
                    <li>Main reason for the score</li>
                    <li>How easy was it to place your order?</li>
                    <li>Is there anything that could have made the ordering experience better?</li>
                    <li>Were there any features you expected but didn’t find? If yes, what are they?</li>
                    <li>How satisfied were you with the delivery speed, accuracy, and rider experience?</li>
                    <li>What could we improve about your delivery experience?</li>
                    <li>How satisfied were you with the temperature and quality of your food upon delivery?</li>
                    <li>How do you feel about the variety of restaurants available on Breadfast today?</li>
                    <li>Are there specific restaurants you’d like us to add?</li>
                  </ul>
                </li>
              </ul>
              <h2>3. Duplication Check</h2>
              <ul>
                <li>On the next day, search using the customer number to confirm if the customer has already been called before, to avoid disturbing them with repeated follow-ups.</li>
              </ul>
              <h2>4. NPS & Compensation Logging</h2>
              <ul>
                <li>Submit the NPS score in the tree.</li>
                <li>Add the compensation amount (if offered) in line with the Compensation Guidelines based on the NPS score.</li>
              </ul>
              <h2>5. Complaint Handling</h2>
              <ul>
                <li>If the customer raises a complaint, create a separate complaint ticket to ensure proper handling and tracking.</li>
              </ul>
            </div>
          `
        }
      ],
      all_numbers: [
        { name: "Breadfast Kitchen", number: "01034347822" },
        { name: "Wok and Walk", number: "01014445740" },
        { name: "Wok and Walk", number: "01125136603" },
        { name: "Karak Boy", number: "01103833380" },
        { name: "Karak Boy", number: "01551539003" },
        { name: "Ama Sushi", number: "01100678062" },
        { name: "Don Pollo", number: "01200830182" },
		{ name: "Dark Solution", number: "01286555968" },
		{ name: "Meat Party", number: "01023377878" },
		{ name: "Mayyal Mayyal", number: "01055666660" },
		{ name: "Cafe Greco", number: "01222419405" },
		{ name: "Garnell", number: "01204300970" },
		{ name: "Garnell", number: "01221644603" },
		{ name: "Takosan", number: "01125930735" },
		{ name: "Vinny's Pizza", number: "01120684401" },
		{ name: "Shawermer", number: "01050861245" },
      ],
      main_process: [
        {
          content: `
            <div class="viewer-search-bar">
              <input type="text" id="compensationSearch" placeholder="Search in compensation table...">
            </div>
            <div class="compensation-calculator">
              <div class="calc-input-group">
                <label for="calcAmount">Amount</label>
                <input type="number" id="calcAmount" placeholder="e.g., 250">
              </div>
              <div class="calc-input-group">
                <label for="calcPercent">Percentage (%)</label>
                <input type="number" id="calcPercent" placeholder="e.g., 50">
              </div>
              <div class="calc-result-group">
                <label>Compensation Value</label>
                <span id="calcResult">0.00</span>
              </div>
            </div>
            <table class="comp-table">
              <thead>
                <tr>
                   <th>Complaint Type</th>
                  <th>Description</th>
                  <th>Needed Action / Information</th>
                  <th>Recommended Compensation</th>
                  <th>Notes</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Bad Quality Food</strong></td>
                  <td>Not fresh food, undercooked, overcooked, spoiled, Rotten, Topping, Burned, Bad Smell.</td>
                  <td>📷 Picture</td>
                  <td><span class="badge refund">Refund</span> 100% refund of the item + Delivery Fees</td>
                  <td class="note">Request photo evidence when possible.</td>
                  <td><span class="category">Food Quality</span></td>
                </tr>
                <tr>
                  <td><strong>Wrong Temperature (Cold/Hot) Food</strong></td>
                  <td>Cold food when it should be hot/melted/damaged cold items.</td>
                  <td>—</td>
                  <td><span class="badge replacement">Refund</span> 100% refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Food Quality</span></td>
                </tr>
                <tr>
                  <td><strong>Wrong Order Delivered</strong></td>
                  <td>Completely different dishes/items.</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> 100% refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Order Issue</span></td>
                </tr>
                <tr>
                  <td><strong>Missing Items</strong></td>
                  <td>Main item missing.</td>
                  <td>—</td>
                  <td><span class="badge replacement">Refund</span> 100% refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Order Issue</span></td>
                </tr>
                <tr>
                  <td><strong>Side Item Missing</strong></td>
                  <td>Side item that should come with the main item (e.g., sauce).</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> 30% refund of item + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Order Issue</span></td>
                </tr>
                <tr>
                  <td><strong>Add-on Missing</strong></td>
                  <td>Paid add-on not provided.</td>
                  <td>—</td>
                  <td><span class="badge replacement">Refund</span> Full refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Order Issue</span></td>
                </tr>
                <tr>
                  <td><strong>Orders Cancelled Due to DA or Restaurant Issues</strong></td>
                  <td>Cancelled by DA or Restaurant.</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> Full Refund + 100 EGP for inconvenience</td>
                  <td>—</td>
                  <td><span class="category">Operational</span></td>
                </tr>
                <tr>
                  <td><strong>Late Orders</strong></td>
                  <td>As per the delay duration</td>
                  <td>—</td>
                  <td><span class="badge replacement">- Short delay (5-14 mins) = Refund delivery fees 20 EGP<br>- Mid delay (15-24 mins) = 25% of order amount capped 150 EGP<br>- Extreme delay (25-30 mins) = 50% of order amount capped 300 EGP<br>- Severe delay (31-... mins) = 100% of order amount capped 500 EGP<br>Any order exceeding 500 EGP requires senior approval before compensation.</td>
                  <td>—</td>
                  <td><span class="category">Operational</span></td>
                </tr>
                <tr>
                  <td><strong>Delivery Agent Misconduct</strong></td>
                  <td>Inappropriate attitude / mishandling food.</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> 50% refund, theft/harassment = 100% refund + escalation</td>
                  <td>—</td>
                  <td><span class="category">Operational</span></td>
                </tr>
                <tr>
                  <td><strong>Smashed / Spilled</strong></td>
                  <td>Food smashed or spilled during handling/delivery.</td>
                  <td>📷 Picture</td>
                  <td><span class="badge replacement">Refund</span> 100% refund + Delivery Fees</td>
                  <td class="note">Request photo evidence when possible.</td>
                  <td><span class="category">Food Quality</span></td>
                </tr>
                <tr>
                  <td><strong>Portion Size Issues</strong></td>
                  <td>Smaller than advertised/paid for.</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> 50% refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Food Quality</span></td>
                </tr>
                <tr>
                  <td><strong>Out-of-Stock after accepting order</strong></td>
                  <td>Restaurant later notifies item is out-of-stock.</td>
                  <td>—</td>
                  <td><span class="badge replacement">Refund</span> Full refund + Delivery Fees</td>
                  <td>—</td>
                  <td><span class="category">Operational</span></td>
                </tr>
                <tr>
                  <td><strong>Technical / System Errors</strong></td>
                  <td>Duplicate charge, no order received.</td>
                  <td>—</td>
                  <td><span class="badge refund">Refund</span> Full Refund + 100 EGP for inconvenience</td>
                  <td>—</td>
                  <td><span class="category">System</span></td>
                </tr>
                <tr>
                  <td><strong>Goodwill Compensation (CSAT Recovery)</strong></td>
                  <td>Minor issue / repetitive complaints.</td>
                  <td>—</td>
                  <td><span class="badge fixed">Fixed</span> 50% refund OR 100 EGP</td>
                  <td>—</td>
                  <td><span class="category">Goodwill</span></td>
                </tr>
                <tr>
                  <td><strong>NPS Recovery – Mild</strong></td>
                  <td>First-time NPS drop, minor complaint.</td>
                  <td>—</td>
                  <td><span class="badge fixed">Fixed</span> 100 EGP</td>
                  <td>—</td>
                  <td><span class="category">Goodwill</span></td>
                </tr>
                <tr>
                  <td><strong>NPS Recovery – Moderate</strong></td>
                  <td>Clear failure: late order, missing items, etc.</td>
                  <td>—</td>
                  <td><span class="badge fixed">Fixed</span> 200 EGP</td>
                  <td>—</td>
                  <td><span class="category">Goodwill</span></td>
                </tr>
                <tr>
                  <td><strong>NPS Recovery – Severe</strong></td>
                  <td>High churn risk, repeated issues.</td>
                  <td>—</td>
                  <td><span class="badge fixed">Fixed</span> 300 EGP</td>
                  <td>—</td>
                  <td><span class="category">Goodwill</span></td>
                </tr>
                <tr>
                  <td><strong>Food Safety – Moderate</strong></td>
                  <td>Foreign object, illness complaints, medical proof, Poisoning.</td>
                  <td>📷 Picture</td>
                  <td><span class="badge refund">Refund</span> Full Refund + 300 EGP</td>
                  <td class="note">Request photo evidence when possible.</td>
                  <td><span class="category">Food Safety</span></td>
                </tr>
              </tbody>
            </table>
          `
        }
      ]
    };
