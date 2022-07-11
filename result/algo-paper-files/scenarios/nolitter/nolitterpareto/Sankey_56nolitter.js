let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.0881, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.6426, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.2879, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4429, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.9977, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2645, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0708, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.9269, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0389, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0241, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0078, "optimal":"yes"} ]}; 
