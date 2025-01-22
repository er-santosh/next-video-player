import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface PlayerControlProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const PlayerControl: React.FC<PlayerControlProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={label} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={label}>{label}</Label>
    </div>
  );
};

export default PlayerControl;
