let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Paper", "target":"Households", "value":8.5095, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":7.4994, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.0102, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":3.9169, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.7866, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.6034, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4918, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":2.2948, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":2.2627, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0298, "optimal":"yes"} ]}; 
