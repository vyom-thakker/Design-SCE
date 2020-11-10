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
 {"source":"Paper", "target":"Households", "value":10.7099, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":9.4385, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.2714, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Landfill", "value":8.2467, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0768, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.7594, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0136, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.0632, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0624, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0008, "optimal":"yes"} ]}; 
