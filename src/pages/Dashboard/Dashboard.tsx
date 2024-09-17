import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
    </div>
  );
};

export default DashboardPage;

