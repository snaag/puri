const { Notes, Tags, NotesTags } = require("../models");

module.exports = {
  // note (post)
  create: async (request, response) => {
    const userId = request.headers.authorization;
    const { picUrl, resultText, comment, review, tags } = request.body;

    try {
      const noteRow = await Notes.create({
        user_userId: userId,
        picUrl,
        resultText,
        comment,
        review
      });

      const tagsRows = await Promise.all(
        tags.map(tag => Tags.create({ tagname: tag }))
      );

      const noteId = noteRow.id;
      const tagsId = tagsRows.reduce((acc, curr) => {
        acc.push(curr.id);
        return acc;
      }, []);

      const notesTagsRows = await Promise.all(
        tagsId.map(tagId =>
          NotesTags.create({
            note_id: noteId,
            tag_id: tagId
          })
        )
      );

      response.status(201).json({
        noteId,
        tagsId
      });
    } catch (error) {
      console.log(error);
      response.status(500).json("Internal Server Error");
    }
  },

  // note (get)
  retrieve: async (request, response) => {
    const userId = request.headers.authorization;
    const noteId = Number(request.headers.note_id);

    try {
      const noteRow = await Notes.findOne({
        where: {
          user_userId: userId,
          id: noteId
        }
      });

      const notesTagsRows = await NotesTags.findAll({
        where: {
          note_id: noteId
        }
      }).then(rows => rows.map(row => row.dataValues));

      const tagsId = notesTagsRows.reduce((acc, curr) => {
        acc.push(curr.tag_id);
        return acc;
      }, []);

      const tagsRows = await Promise.all(
        tagsId.map(tagId =>
          Tags.findOne({
            where: {
              id: tagId
            }
          })
        )
      ).then(rows => rows.map(row => row.dataValues));

      response.status(200).json({ note: noteRow, tags: tagsRows });
    } catch (error) {
      console.log(error);
      !request.headers.authorization || !request.headers.note_id
        ? response.status(404).json("헤더를 확인해주세요")
        : response.status(404).json("Internal Server Error");
    }
  },

  update: async (request, response) => {},

  delete: async (request, response) => {}
};
