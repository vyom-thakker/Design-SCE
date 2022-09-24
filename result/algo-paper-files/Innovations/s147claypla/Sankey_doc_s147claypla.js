let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6229, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.534, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.0196, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1373, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.9296, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.082, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1641, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4121, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.3534, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.1401, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2267, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0453, "optimal":"yes"} ]}; 
