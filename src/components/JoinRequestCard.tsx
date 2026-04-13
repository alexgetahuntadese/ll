
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Clock, 
  CheckCircle, 
  XCircle,
  User
} from 'lucide-react';

interface JoinRequest {
  id: string;
  name: string;
  grade: string;
  school: string;
  requestTime: string;
}

interface JoinRequestCardProps {
  request: JoinRequest;
  onApprove: () => void;
  onReject: () => void;
}

const JoinRequestCard: React.FC<JoinRequestCardProps> = ({ request, onApprove, onReject }) => {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{request.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Badge variant="secondary">{request.grade}</Badge>
                <span>{request.school}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                <Clock className="h-3 w-3" />
                <span>{request.requestTime}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={onReject}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              <XCircle className="h-4 w-4 mr-1" />
              Reject
            </Button>
            <Button
              size="sm"
              onClick={onApprove}
              className="text-green-600 bg-green-50 border-green-600 hover:bg-green-100"
            >
              <CheckCircle className="h-4 w-4 mr-1" />
              Approve
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinRequestCard;
