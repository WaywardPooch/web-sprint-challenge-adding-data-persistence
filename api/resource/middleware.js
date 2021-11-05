const Resource = require("./model");

const validateResourceId = async (req, res, next) => {
  const { id } = req.params;
  const resource = await Resource.getResourceById(id);
  if (resource) {
    next();
  } else {
    next({
      status: 404,
      message: `resource with ID ${id} not found!`
    });
  }
};
const validateResourcePayload = (req, res, next) => {
  const {
    resource_id,
    resource_name,
    resource_description
  } = req.body;
  if (resource_id !== undefined) {
    next({
      status: 400,
      message: "do not provide a resource_id; this will be assigned, automatically"
    });
  } else if (typeof resource_name !== "string") {
    next({
      status: 400,
      message: "resource_name is invalid or missing"
    });
  } else if (
    resource_description &&
    typeof resource_description !== "string"
  ) {
    next({
      status: 400,
      message: "resource_description (optional) must be a string"
    });
  } else {
    next();
  }
};

module.exports = {
  validateResourceId,
  validateResourcePayload
};