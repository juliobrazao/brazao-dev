import { useMutation } from "@tanstack/react-query";
import { AppService } from "../services/AppService";
import { Message } from "../models/message";

export function useMessage() {
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["send-message"],
    mutationFn: (message: Partial<Message>) => {
      return AppService.sendMessage(message);
    },
    onSuccess: () => {
      alert("Message sent successfully!");
    },
  });

  return { mutateAsync, isPending };
}
