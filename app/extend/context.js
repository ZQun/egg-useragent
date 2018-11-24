"use strict";
const UserAgent = require("koa-useragent/lib/useragent");
module.exports = {
    getAgent() {
        const ctx = this;
        const { header } = ctx.request;
        const source = header['user-agent'];
        if (ctx.app.config.useragent.app)
            return new UserAgent(source, header);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvcGx1Z2luL2VnZy11c2VyYWdlbnQvYXBwL2V4dGVuZC9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBeUQ7QUFFekQsaUJBQVM7SUFDTCxRQUFRO1FBQ0osTUFBTSxHQUFHLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHO1lBQUUsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNKLENBQUEifQ==