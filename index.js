exports.handler = async (event) => {
    console.log("Request event:", event); // Optional: Log the incoming event for debugging
    
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/plain"
        },
        body: "1version v1.0"
    };
};
