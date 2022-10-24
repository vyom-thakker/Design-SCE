let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"rPaper"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.2745, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":6.2001, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6133, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":5.8612, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5592, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0493, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0987, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0195, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.441, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0107, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0066, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0021, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.4348, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0057, "optimal":"yes"} ]}; 