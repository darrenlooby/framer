# framer

origin = framer(); // returns the origin window object // No scope means no fetching

origin = framer("inside"); // returns the origin window object and sets a scope name for this requesting frame (overwriting any current scope with that name)

var directlyAbove = origin.above(); // or var directlyAbove = origin.above(0);

var inside = origin.fetch("inside"); // returns the window object for the scope "inside"

Use Case

You've a nested iFrame environment, the top most frame may or may not be in your code base.

You need to access your code base's top most frame from every other frame - all of which are dynamically generated and end up at various levels.

You want a single file that intelligently tracks that tree so you can have a generic API to find and interact.

Well, here you go...

Just place framer.js in every file and you can access framer().origin() for the top most frame in your code base.

var topMostFrameParent = framer().origin();

var events = topMostFrameParent.events = new YourSnazzyEventFramework();
