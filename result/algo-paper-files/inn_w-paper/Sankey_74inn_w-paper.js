let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Paper"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPaper"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Losses", "value":0.0725, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0002, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0002, "optimal":"yes"} , 
{"source":"Paper", "target":"Households", "value":10.6836, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5191, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":8.1649, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":2.1199, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1045, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2027, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0184, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":2.1199, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPaper", "value":0.086, "optimal":"yes"} , 
{"source":"rPaper", "target":"Paper", "value":0.0848, "optimal":"yes"} , 
{"source":"rPaper", "target":"Losses", "value":0.0011, "optimal":"yes"} ]}; 
