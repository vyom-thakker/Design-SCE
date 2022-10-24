let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Clay reycled PLA"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6558, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.3424, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8798, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1185, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8021, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0708, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1416, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.4339, "optimal":"yes"} , 
{"source":"Segregation", "target":"Clay reycled PLA", "value":0.2266, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.2387, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1475, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0477, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Clay reycled PLA", "target":"Value-chain Upstream", "value":0.2266, "optimal":"yes"} ]}; 
