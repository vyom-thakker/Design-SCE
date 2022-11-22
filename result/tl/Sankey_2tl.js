let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rPLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0738, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":4.0812, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0673, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0059, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0119, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0554, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0432, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0083, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0039, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ]}; 
