var redis = require("redis");

let RedisPub = () => {
    return redis.createClient(6379, '192.168.133.104', {
        auth_pass: "PolylinkIM2016"
    })
}
var sub = RedisPub(), pub = RedisPub();
var msg_count = 0;
 
// sub.on("subscribe", function (channel, count) {
    // console.log('----')
    // console.log(channel, ' - ', count)
    // pub.publish(channel, count);
    pub.publish("task_1", "I am sending a second message.");
    pub.publish("task_2", "I am sending my last message.");
// });
 
sub.on("pmessage", function (pattern, channel, message) {
    console.log("sub channel123 " + channel + ": " + message);
    msg_count += 1;
    if (msg_count === 3) {
        sub.unsubscribe();
        sub.quit();
        pub.quit();
    }
});
 
sub.psubscribe("task_*");