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
 {"source":"Paper", "target":"Households", "value":6.519, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":5.7452, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.7739, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":5.2381, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.4623, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.9245, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":4.3136, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":4.2532, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0561, "optimal":"yes"} ]}; 
