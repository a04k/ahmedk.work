import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/cards/Card";
import { Button } from "@/components/ui/Button";
import { Meteors } from "@/components/ui/Meteors";
import config from "@/config/config";

function ContactCard({ className, ...props }) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <Meteors number={5} />
      <Card.Pill icon={MessageCircle} className="z-10 mb-3">
        Contact
      </Card.Pill>

      <p className={cn("my-2 text-sm body-secondary")}>
        Building exceptional digital experiences. Let's talk!
      </p>
      <div className="flex flex-row gap-2 mt-6 w-full">
        <Button
          href={config.links.email}
          styleBtn="boxgen"
          className="w-full"
          target="_blank"
        >
          Email me!
        </Button>
      </div>
    </Card>
  );
}

export default ContactCard;
export { ContactCard };
