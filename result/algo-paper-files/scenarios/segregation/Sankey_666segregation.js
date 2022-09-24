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
 {"source":"LDPE", "target":"Households", "value":0.0231, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.0209, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.5317, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.5123, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.22, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2842, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0184, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":3.2017, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0101, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0062, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.002, "optimal":"yes"} ]}; 
