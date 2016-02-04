// Do we own this frame?
frameOwned = true;
// The current depth of frame
frameDepth = 0;
function framer(_scope) {
 
    // Object to create functions against
    var _framer = {};
 
    // Test to see if the current window is within a frame
    _framer.isInFrame = function (){
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
 
    _framer.origin = function (){
 
            // Test to see if we're in a frame
            if(_framer.isInFrame()){
 
                // Is the current window within a framer tree?
                if(!window.parent.frameOwned) {
                    // This frame has no parent that has the framer file
                    // So it's the heighest level we want
                    frame = window;
                } else {
                    // The parent frame has the framer file
                    // Update the frameDepth variable so we know where we are
                    frameDepth = window.parent.frameDepth + 1;
 
                    // Set a base frame to the current location
                    var frame = window;
 
                    var i = 0; //iterator
                    // Loop through the parents until you reach the origin
                    for(;i<frameDepth; i++){
                        frame = frame.parent;
                    }
 
                }
 
            } else {
                // Not in a frame, return the window object
                // So return the current window object as it's the upper most window
                frame = window;
            }
 
            // return the upper most window object
            return frame;
 
    }
 
    // get the origin
    var _origin = _framer.origin();
 
    // return the origin so that the function always provides to upper most window object within any framer tree
    return _origin;
 
};
