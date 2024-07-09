const Member = require("/Users/administrator/Desktop/Library/models/members.js");

// Function to create a new member
async function createMember(data) {
  try {
    const member = await Member.create(data);
    console.log("Member created:", member.toJSON());
  } catch (error) {
    console.error("Error in creating member:", error);
  }
}

// Function to read a member by ID
async function readMemberById(id) {
  try {
    const member = await Member.findOne({ where: { id: id } });
    if (member) {
      console.log("Member found:", member.toJSON());
      return member;
    } else {
      console.log("Member not found");
      return null;
    }
  } catch (error) {
    console.error("Error finding member:", error);
  }
}

// Function to read all members
async function readAllMembers() {
  try {
    const members = await Member.findAll();
    console.table(members.map((member) => member.toJSON()));
  } catch (error) {
    console.error("Error reading members:", error);
  }
}

// Function to update a member by ID
async function updateMemberById(id, newData) {
  try {
    await Member.update(newData, {
      where: { id: id },
    });
    console.log("Member updated successfully");
  } catch (error) {
    console.error("Error updating member:", error);
  }
}

// Function to delete a member by ID
async function deleteMemberById(id) {
  try {
    await Member.destroy({
      where: { id: id },
    });
    console.log("Member deleted successfully");
  } catch (error) {
    console.error("Error deleting member:", error);
  }
}

module.exports = {
  createMember,
  readMemberById,
  readAllMembers,
  updateMemberById,
  deleteMemberById,
};
