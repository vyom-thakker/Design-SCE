let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Losses", "value":0.0648, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":10.4437, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5925, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":7.8513, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":1.8943, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4046, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2086, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0714, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":1.8943, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.3332, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.3285, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0043, "optimal":"yes"} ]}; 
