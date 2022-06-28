export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "title_img",
			title: "Title_img",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "project_name",
			title: "Project_name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "project_name",
				maxLength: 90,
			},
		},
		{
			name: "short_description",
			title: "Short_description",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "stack",
			title: "Stack",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "github",
			title: "GitHub",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
		},
		{
			name: "live",
			title: "Live",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
		},
		{
			name: "image",
			title: "Image",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "gallary",
			title: "Gallary",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "purpose",
			title: "Purpose",
			type: "string",
		},
		{
			name: "problem",
			title: "Problem",
			type: "string",
		},
		{
			name: "lesson",
			title: "Lesson",
			type: "string",
		},
	],
};
