"use strict";

/*
 * This function returns an attachment array
 * @Input: req.files
 * @Output: array of attachments, for nodemailer
 */
function atmailer(files) {
  let attachments = [];

  // Do we have files?
  if (files) {
    // do we have multiple files?
    if (Array.isArray(files)) {
      files.forEach((file) => {
        attachments.push({ filename: file.name, content: file.data });
      });
    } else {
      attachments.push({ filename: files.name, content: files.data });
    }
  }
  return attachments;
}

module.exports.atmailer = atmailer;
