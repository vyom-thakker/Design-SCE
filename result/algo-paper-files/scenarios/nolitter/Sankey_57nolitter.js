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
 {"source":"LDPE", "target":"Households", "value":0.1886, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.0585, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.7174, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5298, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.4776, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2186, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1439, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":2.3337, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0791, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0489, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0158, "optimal":"yes"} ]}; 
