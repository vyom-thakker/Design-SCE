let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0634, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.412, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0057, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.297, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3131, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0331, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0041, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0007, "optimal":"yes"} ]}; 
