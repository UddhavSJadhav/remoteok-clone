import { Image } from "@tiptap/extension-image";

// Create a custom extension for list items that includes indent and outdent commands.
export const ListItemExtension = () =>
  Image.extend({
    addCommands(): any {
      return {
        increaseIndent:
          () =>
          ({ commands }: { commands: any }) => {
            return commands.updateAttributes("listItem", { indent: "1" });
          },
        decreaseIndent:
          () =>
          ({ commands }: { commands: any }) => {
            return commands.updateAttributes("listItem", { indent: "0" });
          },
      };
    },
  });
